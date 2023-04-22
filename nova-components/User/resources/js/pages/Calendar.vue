<script setup>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from 'axios'
import {onMounted, ref} from 'vue'
// import interactionPlugin from '@fullcalendar/interaction'

const calendarOptions = ref({
        plugins: [ dayGridPlugin ],
        initialView: 'dayGridMonth',
        events: [
          { title: 'event 1', date: '2023-04-01' },
          { title: 'event 2', date: '2023-04-02' }
        ]
      })

const users = ref([])
const getUser = () =>{
    axios.get('/nova-vendor/user')
    .then((res) => {
        users.value = res.data.map(item => {
            item['date'] = item.created_at
            return item
        })
        calendarOptions.value.events = users.value
    })
}

onMounted(() => {
    getUser()
})
</script>
<template>
  <FullCalendar :options="calendarOptions" />
</template>
