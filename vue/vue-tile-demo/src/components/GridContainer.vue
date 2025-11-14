<template>
  <div class="max-w-screen-xl mx-auto px-4 w-3/5">
    <div>
      <div v-for="(subCategories, category) in productData" :key="category" class="mb-8">
        <h2 class="text-2xl mb-4 cursor-pointer" @click="toggleCategory(category)">
          {{ category }}
          <font-awesome-icon
            :icon="expandedCategories[category] ? 'chevron-down' : 'chevron-right'"
            class="transition-transform"
          />
        </h2>
        <div class="flex-auto bg-gray-100">
          <div v-if="expandedCategories[category]">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="(items, subCategory) in subCategories" :key="subCategory" class="mb-4">
                <h3 class="text-xl mb-2">{{ subCategory }}</h3>
                <!-- <div :class="'grid grid-cols-' + maxItemsPerSubCategory(subCategories)"> -->
                <div class="grid grid-cols-3">
                  <div
                    v-for="(item, index) in items"
                    :key="index"
                    class="bg-green-500 p-4 text-white text-center rounded cursor-pointer transition duration-300 ease-in-out hover:bg-green-600 box-content h-24 w-24"
                    @click="handleClick(item)"
                  >
                    {{ item }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  data() {
    return {
      FontAwesomeIcon,
      expandedCategories: {},
      productData: {
        Game: {
          Dev: ['Dashboard', 'Grafana'],
          QA: ['Dashboard', 'Grafana'],
          CI: ['Dashboard', 'Grafana'],
          Int: ['Dashboard', 'Grafana'],
          Prod: ['Dashboard', 'Grafana'],
          Load: ['Dashboard', 'Grafana']
        },
        Network: {
          Dev: ['Dashboard', 'Site', 'Grafana'],
          QA: ['Dashboard', 'Site', 'Grafana'],
          CI: ['Dashboard', 'Site', 'Grafana'],
          Int: ['Dashboard', 'Site', 'Grafana'],
          Prod: ['Dashboard', 'Site', 'Grafana'],
          Load: ['Dashboard', 'Site', 'Grafana']
        }
      }
    }
  },
  created() {
    // Initialize expandedCategories with all categories set to true
    this.expandedCategories = Object.keys(this.productData).reduce((acc, category) => {
      acc[category] = true
      return acc
    }, {})
  },
  methods: {
    handleClick(item) {
      alert(`You clicked on ${item}`)
    },
    toggleCategory(category) {
      this.expandedCategories = {
        ...this.expandedCategories,
        [category]: !this.expandedCategories[category]
      }
    },
    maxItemsPerSubCategory(subCategories) {
      // Function to calculate the maximum number of items in any subcategory
      let maxItems = 0
      for (const subCategory in subCategories) {
        const itemCount = subCategories[subCategory].length
        if (itemCount > maxItems) {
          maxItems = itemCount
        }
      }
      // Return the number of columns based on the maximum items found
      return Math.min(maxItems, 6) // Limit to 6 columns for example
    }
  }
}
</script>
