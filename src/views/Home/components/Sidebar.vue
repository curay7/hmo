<template>
  <div class="l-sidebar">
    <div class="logo">
      <div class="logo__txt">O</div>
    </div>
    <div class="l-sidebar__content">
      <nav class="c-menu js-menu">
        <ul class="u-list">
          <li
            class="c-menu__item"
            :class="{ active: activeBtn === 'btn1' }"
            @click="activeBtn = 'btn1'"
            data-toggle="tooltip"
            title="Proposals"
          >
            <div class="c-menu__item__inner">
              <i class="material-icons">dashboard</i>
              <div class="c-menu-item__title"><span>Proposals</span></div>
            </div>
          </li>
          <li
            class="c-menu__item has-submenu"
            :class="{ active: activeBtn === 'btn2' }"
            @click="activeBtn = 'btn2'"
            data-toggle="tooltip"
            title="History"
          >
            <div class="c-menu__item__inner">
              <i class="material-icons">assignment_ind</i>
              <div class="c-menu-item__title"><span>History</span></div>
            </div>
          </li>
          <li
            class="c-menu__item has-submenu"
            :class="{ active: activeBtn === 'btn3' }"
            @click="activeBtn = 'btn3'"
            data-toggle="tooltip"
            title="Accounts"
          >
            <div class="c-menu__item__inner">
              <i class="material-icons">assessment</i>
              <div class="c-menu-item__title"><span>Accounts</span></div>
            </div>
          </li>
          <li
            class="c-menu__item has-submenu"
            :class="{ active: activeBtn === 'btn4' }"
            @click="activeBtn = 'btn4'"
            data-toggle="tooltip"
            title="Settings"
          >
            <div class="c-menu__item__inner">
              <i class="material-icons">attach_money</i>
              <div class="c-menu-item__title"><span>Settings</span></div>
            </div>
          </li>
          <li
            class="c-menu__item has-submenu"
            :class="{ active: activeBtn === 'btn5' }"
            @click="activeBtn = 'btn5'"
            data-toggle="tooltip"
            title="Settings"
          >
            <div class="c-menu__item__inner">
              <i class="material-icons">assignment</i>
              <div class="c-menu-item__title"><span>Settings</span></div>
            </div>
          </li>
          <li
            class="c-menu__item has-submenu"
            :class="{ active: activeBtn === 'btn6' }"
            @click="activeBtn = 'btn6'"
            data-toggle="tooltip"
            title="Settings"
          >
            <div class="c-menu__item__inner">
              <i class="material-icons">library_books</i>
              <div class="c-menu-item__title"><span>Settings</span></div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const activeBtn = ref("btn1");

    return {
      activeBtn,
    };
  },
};
</script>

<style></style>
