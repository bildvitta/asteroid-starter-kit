<template>
  <q-layout view="hHh Lpr lFf">
    <q-header height-hint="70">
      <qas-app-bar :apps="apps" brand="//placehold.it/500x400" :is-auth="true" title="{{ name }}" :user="user" @sign-out="signOut" @toggle-menu="toggleMenuDrawer" />
    </q-header>

    <qas-app-menu v-model="menuDrawer" :items="menuList" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const apps = [
  {
    label: 'Hub',
    image: 'http://placehold.it/640x640'
  },
  {
    label: 'Produto',
    image: 'http://placehold.it/640x640'
  },
  {
    label: 'CRM',
    image: 'http://placehold.it/640x640'
  },
  {
    label: 'Vendas',
    image: 'http://placehold.it/640x640'
  },
  {
    label: 'Repasse',
    image: 'http://placehold.it/640x640'
  },
  {
    label: 'Jurídico',
    image: 'http://placehold.it/640x640'
  }
]

const menuList = [
  {
    label: 'Usuários',
    icon: 'o_people_alt',
    children: [
      {
        label: 'Lista de usuários',
        to: { name: 'UsersList' }
      },
      {
        label: 'Grupos',
        to: { name: 'GroupsList' }
      },
      {
        label: 'Aprovação de cadastro',
        to: { name: 'ApprovalsList' }
      }
    ]
  },

  {
    label: 'Políticas',
    icon: 'o_supervised_user_circle',
    to: { name: 'PoliciesList' }
  }
]

const user = {
  photo: 'https://www.abc.net.au/cm/lb/6367016/data/alan2c-see-the-person-data.jpg',
  name: 'Eduardo Lima',
  email: 'eduardolima@gmail.com'
}

export default {
  data () {
    return {
      menuDrawer: true
    }
  },

  computed: {
    apps () {
      return apps
    },

    menuList () {
      return menuList
    },

    user () {
      return user
    }
  },

  methods: {
    signOut () {
      // console.log('Sign out fired.')
    },

    toggleMenuDrawer () {
      this.menuDrawer = !this.menuDrawer
    }
  }
}
</script>
