<template>
  <div class="yq-form">
    <slot name="header"></slot>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItem" :key="item.label">
          <el-col v-bind="collLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                  style="width: 100%"
                >
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
                <el-date-picker
                  v-model="formData[`${item.field}`]"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                >
                </el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, watch, ref } from 'vue';
import { IFormType } from '../type/type';
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      require: true
    },
    formItem: {
      type: Array as PropType<IFormType[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    collLayout: {
      type: Object,
      default: () => ({
        xs: 24,
        xm: 24,
        md: 12,
        lg: 8,
        xl: 8
      })
    }
  },
  components: {},
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    //需要使用双向绑定
    //将数据进行拷贝,再取出相应的值
    const formData = ref({ ...props.modelValue });

    //深度监听数据的改变,当输入框的数据发生改变,发射事件
    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue);
      },
      { deep: true }
    );
    //这里将双向绑定进行拆解
    // const handleModelValue = (value: any, field: string) => {
    //   emit('update:modelValue', { ...props.modelValue, [field]: value });
    // };
    return {
      // handleModelValue
      formData
    };
  }
});
</script>

<style scoped lang="less">
.yq-form {
  padding-top: 22px;
}
</style>
