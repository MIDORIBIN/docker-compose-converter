<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs6>
        <div class="title">Docker run command</div>
        <v-textarea
                outline
                auto-grow
                solo
                clearable
                v-model=command
                :placeholder=commandPlaceholder
        ></v-textarea>
      </v-flex>
      <v-flex xs6>
        <div class="title">Docker Compose</div>
        <v-textarea
                outline
                auto-grow
                solo
                :value=compose
                :placeholder=composePlaceholder
        ></v-textarea>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import convert from '@/service/convert-docker-command.ts';

export default Vue.extend({
  data: () => ({
    command: '',
    commandPlaceholder: 'e.g.) docker run nginx',
    composePlaceholder: 'version: 3\n' +
      'services:\n' +
      '    nginx:\n' +
      '        image: nginx',
  }),
  computed: {
    compose(): string {
      if (this.command.length === 0) {
        return '';
      }
      return convert(this.command);
    },
  },
});
</script>

<style scoped>
</style>
