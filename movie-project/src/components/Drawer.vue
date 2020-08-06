<template>
  <v-navigation-drawer app src="../assets/popcorn.jpg" permanent expand-on-hover>
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
                <div class="left">
                  <v-btn small block rounded color="primary" dark>Avengers</v-btn>
                </div>
                <div class="left">
                  <v-btn small block rounded color="primary" dark>Avengers: Age of Ultron</v-btn>
                </div>
                <div class="left">
                  <v-btn small block rounded color="primary" dark>Avengers: Infinity War</v-btn>
                </div>
                <div class="left">
                  <v-btn small block rounded color="primary" dark>Avengers: Endgame</v-btn>
                </div>
                <div class="left">
                  <v-btn small block rounded color="primary" dark>Guardians of the Galaxy</v-btn>
                </div>
                <div class="left">
                  <v-btn small block rounded color="primary" dark>Guardians of the Galaxy 2</v-btn>
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
                <div class="left">
                  <v-btn small block rounded color="primary" dark>Star Wars: The Phantom Menace</v-btn>
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
                <div class="left">
                  <v-btn small block rounded color="primary" dark>Toy Story</v-btn>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-list-item-content>
      <v-list-item-content>
        <v-list-item-title>Movies</v-list-item-title>
        <br />
        <div class="left">
          <v-btn small block rounded color="primary" dark>Avengers</v-btn>
        </div>
        <div class="left">
          <v-btn small block rounded color="primary" dark>Avengers: Age of Ultron</v-btn>
        </div>
        <div class="left">
          <v-btn small block rounded color="primary" dark>Avengers: Infinity War</v-btn>
        </div>
        <div class="left">
          <v-btn small block rounded color="primary" dark>Avengers: Endgame</v-btn>
        </div>
        <div class="left">
          <v-btn small block rounded color="primary" dark>Guardians of the Galaxy</v-btn>
        </div>
        <div class="left">
          <v-btn small block rounded color="primary" dark>Guardians of the Galaxy 2</v-btn>
        </div>
        <div class="left">
          <v-btn small block rounded color="primary" dark>Star Wars: The Phantom Menace</v-btn>
        </div>
        <div class="left">
          <v-btn small block rounded color="primary" dark>Toy Story</v-btn>
        </div>
      </v-list-item-content>
    </v-list>
  </v-navigation-drawer>
</template>
