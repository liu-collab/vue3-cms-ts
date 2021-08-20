<template>
  <div class="yq-form">
    <el-from :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="8">
            <el-form-item :label="item.label" :style="itemStyle">
              <temmplat
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                ></el-input>
              </temmplat>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder">
                  <el-option
                    v-for="option in item.options"
                    :value="option.value"
                    :key="option.value"
                    :label="option.title"
                  >
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker v-bind="item.otherOptions" style="width: 100%">
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-from>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IFormType } from '../type/type';
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormType[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    }
  },
  components: {},
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
.yq-form {
  padding-top: 22px;
}
</style>
