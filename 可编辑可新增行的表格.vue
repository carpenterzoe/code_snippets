<template>
  <div>
    <el-table :data="dataSource" border :show-header="false">
      <el-table-column
        prop="cell1"
        label="cell1"
        width="300"
        >
        <template slot="cell1" slot-scope="{row}">
          <template v-if="row.edit" class="edit-cell">
            <el-input v-model="row.cell1" class="edit-input" size="small" />
            <i class="el-icon-check"></i>
          </template>
          <span v-else>{{ row.cell1 }}</span>
          <i class="el-icon-edit"></i>
        </template>
      </el-table-column>
      <el-table-column
        prop="cell2"
        label="cell2"
        width="300"
        class="edit-cell">
        <template slot="cell2" slot-scope="{row}">
          <template v-if="row.edit">
            <el-input v-model="row.cell2" class="edit-input" size="small"/>
          </template>
          <span v-else>{{ row.cell2 }}</span>
          <i class="el-icon-edit"></i>
          <i class="el-icon-check"></i>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="100"
        >
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="onDelete(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="editable-add-btn" @click="handleAdd">Add</el-button>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      dataSource: [{cell1:'222', cell2: '888',edit: false}, {cell1:'222', cell2: '888',edit: false}]
    }
  },
  methods: {
    onDelete (index) {
      this.dataSource.splice(index, 1)
    },
    handleAdd () {
      let newData = {}
      this.dataSource = [...this.dataSource, newData]
    },
  },
}
</script>
<style>
.edit-cell {
  position: relative;
}
/* .editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
} */
/* .editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
} */
.el-icon-edit,
.el-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}
.el-icon-edit {
  line-height: 18px;
  display: none;
}
.el-icon-check {
  line-height: 28px;
}
.edit-cell:hover .el-icon-edit {
  display: inline-block;
}
.el-icon-edit:hover,
.el-icon-check:hover {
  color: #108ee9;
}
</style>