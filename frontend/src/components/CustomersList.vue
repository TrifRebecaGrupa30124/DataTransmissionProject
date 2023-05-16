<template>
    <img
            class="img1"
            src="../assets/770117_people_512x512.png"
    />
    <img
            class="img2"
            src="../assets/beautiful-woman-avatar-character-icon-free-vector.jpg"
    />
    <img
            class="img3"
            src="../assets/avatar-png-icon-15.jpg"
    />
    <img
            class="img4"
            src="../assets/319-3191274_male-avatar-admin-profile-removebg-preview.png"
    />


    <table class="table-row tablee" style="position: relative">
    <tr
      class="customers-table"
      :class="{ active: index == currentIndex }"
      v-for="(customer, index) in customers"
      :key="index"
      @click="setActiveCustomer(customer, index)"
    >
      <thead>

        <th>First Name</th>
        <th>Last Name</th>
        <th>Job</th>
        <th>Salary</th>
        <th>Email</th>
        <th>Phone</th>
      </thead>
      <tbody>

        <td>
          {{ customer.name }}
        </td>
        <td>
          {{ customer.lastName }}
        </td>
        <td>
          {{ customer.job }}
        </td>
        <td>
          {{ customer.salary }}$
        </td>
        <td>
          {{ customer.email }}
        </td>
        <td>0{{ customer.phone }}</td>
<!--      <td>{{ customer.image }}</td>-->
      </tbody>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomerDataService from '@/services/CustomerDataService';
import Customer from '@/types/Customer';
import ResponseData from '@/types/ResponseData';

export default defineComponent({
  name: 'CustomersList.vue',
  data() {
    return {
      customers: [] as Customer[],
      currentCustomer: {} as Customer,
      currentIndex: -1,
      title: ''
    };
  },
  methods: {
    retrieveCustomers() {
      CustomerDataService.getAll()
        .then((response: ResponseData) => {
          this.customers = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveCustomers();
      this.currentCustomer = {} as Customer;
      this.currentIndex = -1;
    },

    setActiveCustomer(customer: Customer, index = -1) {
      this.currentCustomer = customer;
      this.currentIndex = index;
    },
    deleteCustomer(id: any) {
      CustomerDataService.delete(id)
        .then((response: ResponseData) => {
          console.log(response);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    removeAllCustomers() {
      CustomerDataService.deleteAll()
        .then((response: ResponseData) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveCustomers();
  }
});
</script>
<style>
.img1{
    width: 120px;
    margin-left: 40px;
}
.img2{
    width: 150px;
    margin-left: 30px;
}
.img3{
    width: 125px;
    margin-left: 35px;
}
.img4{
    width: 190px;
    margin-left: 20px;
}


.tablee {
  margin-left: auto;
  margin-right: auto;
}
.customers-table {
  border: 2px solid #fadadb;
}
.tablee th,
.tablee td {
  padding: 12px 30px;
}
</style>
<style scoped></style>
