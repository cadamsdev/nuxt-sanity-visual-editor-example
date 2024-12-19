<template>
  <div>
    <NuxtRouteAnnouncer />

    <h1>Movies</h1>
    <ul>
      <li v-for="movie in movies" :key="movie._id">
        {{ movie.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  type MovieQueryResult = {
    title: string;
    _id: string;
  }

  const query = `
    *[_type == "movie"] {
      _id,
      title
    }
  `;

  const { data: movies } = await useSanityQuery<MovieQueryResult[]>(query);
</script>
