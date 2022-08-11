<template>
  <div class="">
    <!-- component -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
      <article>
        <section v-if="errors == false">
          <div>
            <h2 class="text-2xl font-extrabold text-gray-900 mt-10">
              OUR COURSES
            </h2>
            <div
              class="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8"
            >
              <article
                v-for="content in content"
                :key="content"
                class="
                  bg-white
                  group
                  relative
                  rounded-lg
                  overflow-hidden
                  shadow-lg
                  hover:shadow-2xl
                  transform
                  duration-200
                "
              >
                <h2 class="text-green-600 uppercase ml-5 mt-3">
                  {{ content.package_name }}
                </h2>
                <div class="relative w-full h-80 md:h-64 lg:h-44">
                  <img
                    v-bind:src="require('@/assets/coin/coin.png')"
                    alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                    class="w-full h-full object-center object-cover"
                  />
                </div>
                <div class="px-3 py-4">
                  <h3 class="text-sm text-gray-500 pb-2">
                    <h2
                      class="
                        text-center text-xl text-yellow-700
                        font-medium
                        leading-8
                      "
                    >
                      {{ content.value }}
                    </h2>
                  </h3>
                  <router-link
                    :to="{
                      name: 'PaymentMethod',
                      params: {
                        merchantId: '1217561',
                        coinId: content.id,
                        packageName: content.package_name,
                        currency: content.currency,
                        amount: content.price,
                        value: content.value,
                        dataShareOk: 'true',
                      },
                    }"
                    class="
                      btn btn-primary btn-block
                      bg-purple-600
                      hover:bg-purple-900
                      text-white
                      font-bold
                      p-2
                      rounded
                      container
                      max-w-sm
                      mx-auto
                      flex-1 flex flex-col
                      items-center
                      justify-center
                      px-2
                      mt-5
                    "
                  >
                    ${{ content.price }}
                  </router-link>
                </div>
              </article>
            </div>
          </div>
        </section>
      </article>
    </section>
  </div>
</template>

<script>
import UserService from "@/services/user.service.js";

export default {
  data() {
    return {
      content: "",
      errors: true,
    };
  },
  mounted() {
    UserService.getCoin().then(
      (response) => {
        this.errors = false;
        this.content = response.data.coins;
        this.user = response.data.user;
      },
      (error) => {
        this.errors = true;
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>

<style lang="scss" scoped></style>
