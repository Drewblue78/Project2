<template>
  <v-navigation-drawer app src="../assets/popcorn.jpg" permanent fixed>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">Movie Player</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item-content>
        <v-list-item-title>Collections</v-list-item-title>
        <br />
        <v-row justify="center">
          <v-expansion-panels accordion>
            <v-expansion-panel v-for="(item,i) in 1" :key="i">
              <v-expansion-panel-header>Marvel</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="left" v-for="(mov, i) in $root.movies" :key="i">
                  <v-btn
                    small
                    block
                    rounded
                    color="primary"
                    dark
                    @click="$root.marvel=mov.video"
                  >{{mov.title}}</v-btn>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
        <v-row justify="center">
          <v-expansion-panels accordion>
            <v-expansion-panel v-for="(item,i) in 1" :key="i">
              <v-expansion-panel-header>Star Wars</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="left" v-for="(mov, i) in $root.movies" :key="i">
                  <v-btn
                    small
                    block
                    rounded
                    color="primary"
                    dark
                    @click="$root.currentmovie=mov.video"
                  >{{mov.title}}</v-btn>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
        <v-row justify="center">
          <v-expansion-panels accordion>
            <v-expansion-panel v-for="(item,i) in 1" :key="i">
              <v-expansion-panel-header>Animated</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="left" v-for="(mov, i) in $root.movies" :key="i">
                  <v-btn
                    small
                    block
                    rounded
                    color="primary"
                    dark
                    @click="$root.currentmovie.categories=mov.video"
                  >{{mov.title}}</v-btn>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-list-item-content>
      <v-list-item-content>
        <v-list-item-title>Movies</v-list-item-title>
        <div class="left" v-for="(mov, i) in $root.movies" :key="i">
          <v-btn
            small
            block
            rounded
            color="primary"
            dark
            @click="$root.currentmovie=mov.video"
          >{{mov.title}}</v-btn>
        </div>
      </v-list-item-content>
    </v-list>
  </v-navigation-drawer>
</template>
