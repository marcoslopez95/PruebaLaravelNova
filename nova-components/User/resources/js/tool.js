import Tool from './pages/Tool'
import Calendar from './pages/Calendar'

Nova.booting((app, store) => {
  Nova.inertia('User', Tool)
})

Nova.booting((app, store) => {
    Nova.inertia('Calendar', Calendar)
  })
