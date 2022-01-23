<script setup>
import * as Sentry from "@sentry/vue";

const user = {};

const post = {
  id: 1,
  title: "Hello World!",
  body: "lorem ipsum , someething exciting is coming your way",
};

Sentry.setContext("post", { id: post.id, title: post.title });


//  
Sentry.setTag("randomTag", "hello-tag");

const makeToast = () => {
  sliceBread();
};
</script>

<template>
  <div>
    <h1 class="text-4xl">About</h1>
    <button @click="user.email()">Send email</button>
    <button @click="makeToast()">Make toast</button>
  </div>
</template>
