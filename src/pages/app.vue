<script setup>
import { useCashier } from '../stores/pinia/cashier'
const cashier = useCashier()
</script>
<template>
  <h1>{{ cashier }}</h1>
</template>
