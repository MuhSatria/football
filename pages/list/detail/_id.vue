<template>
  <div class="section-detail">
    <Navbar :name="data.name" />
    <v-container>
      <div class="box-header">
        <div class="img-logo" :style="{ 'background-image': 'url(' + data.crestUrl + ')' }" />
        <div class="desc">
          <h2 class="title-name" v-text="data.name">
            Mancaster
          </h2>
          <p class="data-text info-text" v-text="data.shortName">
            Munce
          </p>
          <label for="country">Country</label>
          <p id="country" class="data-text" v-text="data.area.name">
            England
          </p>
          <label for="founded">Founded</label>
          <p id="founded" class="data-text" v-text="data.founded">
            Founded
          </p>
          <label for="address">Address</label>
          <p id="address" class="data-text" v-text="data.address">
            Addresss
          </p>
          <label for="phone">Phone</label>
          <p id="phone" class="data-text" v-text="data.phone">
            phone
          </p>
          <label for="email">Email</label>
          <p id="email" class="data-text" v-text="data.email">
            Email
          </p>
          <label for="color">Club Color</label>
          <p id="color" class="data-text" v-text="data.clubColors">
            Club Color
          </p>
          <label for="stadiun">Venue</label>
          <p id="stadiun" class="data-text" v-text="data.venue">
            Stadion
          </p>
          <label for="website">Website</label>
          <a id="website" class="data-text link" :href="data.website" target="_blank" v-text="data.website">
            Website
          </a>
        </div>
      </div>
      <div class="player-section">
        <h2 class="mb-4">
          Player
        </h2>
        <v-row no-gutters>
          <v-col
            v-for="(player, index_play) in data.squad"
            :key="index_play"
            cols="12"
            lg="3"
            md="4"
            sm="6"
          >
            <v-card class="pa-2 box-card" outlined tile>
              <v-expansion-panels flat>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    {{ data.squad[index_play].name }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <label for="playerPosition">Position</label>
                    <p id="playerPosition" class="player" v-text="data.squad[index_play].position" />
                    <label for="playerDate">Date of Birth</label>
                    <p id="playerDate" class="player" v-text="data.squad[index_play].dateOfBirth" />
                    <label for="playerCountry">Country of Birth</label>
                    <p id="playerCountry" class="player" v-text="data.squad[index_play].countryOfBirth" />
                    <label for="playerNation">Nationality</label>
                    <p id="playerNation" class="player" v-text="data.squad[index_play].nationality" />
                    <label for="playerRole">Role</label>
                    <p id="playerRole" class="player" v-text="data.squad[index_play].role" />
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Detail',
      data: {
        id: 18,
        area: {
          id: 2008,
          name: 'Germany'
        },
        name: 'Borussia Mönchengladbach',
        shortName: 'M gladbach',
        tla: 'BMG',
        crestUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Borussia_M%C3%B6nchengladbach_logo.svg',
        address: 'Hennes-Weisweiler-Allee 1 Mönchengladbach 41179',
        phone: '+49 (02161) 92930',
        website: 'http://www.borussia.de',
        email: 'info@borussia.de',
        founded: 1900,
        clubColors: 'Black / White / Green',
        venue: 'Stadion im Borussia-Park',
        squad: [
          {
            id: 3176,
            name: 'Matthias Ginter',
            position: 'Defender',
            dateOfBirth: '1994-01-19T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            role: 'PLAYER'
          },
          {
            id: 3185,
            name: 'Lars Stindl',
            position: 'Midfielder',
            dateOfBirth: '1994-01-19T00:00:00Z',
            countryOfBirth: 'Germany',
            nationality: 'Germany',
            role: 'PLAYER'
          },
          {
            id: 3470,
            name: 'Yann Sommer',
            position: 'Goalkeeper',
            dateOfBirth: '1994-01-19T00:00:00Z',
            countryOfBirth: 'Switzerland',
            nationality: 'Switzerland',
            role: 'PLAYER'
          },
          {
            id: 3473,
            name: 'Michael Lang',
            position: 'Defender',
            dateOfBirth: '1994-01-19T00:00:00Z',
            countryOfBirth: 'Switzerland',
            nationality: 'Switzerland',
            role: 'PLAYER'
          }
        ]
      }
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>
