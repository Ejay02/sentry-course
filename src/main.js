import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/main.pcss"
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

const app = createApp(App)
Sentry.init({
    app,
    dsn: "https://bd936ab21e774610bcb57f1af376e67f@o1123860.ingest.sentry.io/6162056",
    logErrors: true,
    release: __SENTRY_RELEASE__,
    environment: import.meta.env.MODE,
    integrations: [
      new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ["localhost", "my-site-url.com", /^\//],
      }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
app.use( router)
.mount('#app')

// IDENTIFY USER IN SENTRY : Get the user by email, id or ip address
const user = {
  email:"e.jae02@gmail.com",
  id:''
}
Sentry.setUser(user)

// DELETE USER WHEN USER LOGS OUT
Sentry.configureScope(scope => scope.setUser(null))
