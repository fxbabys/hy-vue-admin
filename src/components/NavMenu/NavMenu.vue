<template>
    <el-row class="tac">
        <transition name="el-fade-in">
            <div class="navLogo" v-show="!isCollapse">H O M Y I T</div>
        </transition>
        <el-col :span="24">
            <el-menu default-active="2" @open="handleOpen" @close="handleClose" :collapse="isCollapse" class="el-menu-vertical-demo" unique-opened router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <template v-for="item in menu">
                    <template v-if="!item.hasOwnProperty('meta') || !item.meta.hasOwnProperty('roles') || isVisible(item.meta.roles)">
                        <el-menu-item v-if="!item.sub" :index="item.id" :key="item.id">
                            <i :class="item.icon"></i>&nbsp;
                            <span v-text="item.name"></span>
                        </el-menu-item>
                        <el-submenu v-else-if="item.sub" :index="item.id" :key="item.id">
                            <template slot="title">
                                <i :class="item.icon"></i>&nbsp;
                                <span v-text="item.name"></span>
                            </template>
                            <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.param ? sub.componentName + sub.param : sub.componentName">
                                <el-menu-item :index="sub.param ? sub.componentName + '?info=' + sub.param : sub.componentName" v-text="sub.name"></el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </template>
                </template>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
import menu from '@/config/menu-config'

export default {
    name: 'NavMenu',
    data() {
        return {
			menu: menu,
            // roles: []
            isCollapse: false
        };
    },
    components: {

	},
	created () {
		// console.log(this.$store.getters.roles)
        // this.roles = this.$store.getters.roles
        this.$bus.$on('collapse', () => {
            this.isCollapse = !this.isCollapse
        })
	},
    computed: {
        ...mapGetters([
      	    'name',
            'roles'
        ])
    },
    methods: {
        handleOpen (key, keyPath) {
          console.log(key, keyPath)
        },
        handleClose (key, keyPath) {
          console.log(key, keyPath)
        },
        isVisible (metaRoles) {
          let flag = false
          if (metaRoles.length === 0) return true
          metaRoles.some(metaRole => {
            this.roles.some(role => {
              if (role === metaRole) {
                flag = true
                return true
              }
            })
          })
          return flag
        }
    }
}
</script>

<style scoped lang="stylus">
$header_height = 60px
.navLogo
    color #fff
    height $header_height
    line-height $header_height
    font-size 25px
    text-align center
    border-bottom 1px solid #666
.el-menu
    border none
    .el-menu-item
        // padding-left 0!important
        // display inline-flex
    .over-hide
        overflow hidden
</style>
