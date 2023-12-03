import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import CreateEvent from '../views/CreateEvent.vue'
import EditEvent from '../views/EditEvent.vue'
import EventInfo from '../views/EventInfo.vue'
import MyEvents from '../views/MyEvents.vue'
import MyReservations from '../views/MyReservations.vue'
import SearchResults from '../views/SearchResults.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/createEvent',
      name: 'Create Event',
      component: CreateEvent
    },
    {
      path: '/editEvent',
      name: 'Edit Event',
      component: EditEvent
    },
    {
      path: '/eventInfo',
      name: 'Event Info',
      component: EventInfo
    },
    {
      path: '/myEvents',
      name: 'My Events',
      component: MyEvents
    },
    {
      path: '/myReservations',
      name: 'My Reservations',
      component: MyReservations
    },
    {
      path: '/searchResults',
      name: 'Search Results',
      component: SearchResults
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})

export default router
