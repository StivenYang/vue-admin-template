<template>
    <div class="app-container">
        <div class="filter-container">
            <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
                <el-table-column prop="date" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<style>
.el-table .warning-row {
    background: oldlace;
}

.el-table .success-row {
    background: #f0f9eb;
}
</style>

<script>
import { fileInfoApi } from '@/api/fileInfo.js'

export default {
    methods: {
        tableRowClassName({ row, rowIndex }) {
            if (rowIndex === 1) {
                return 'warning-row';
            } else if (rowIndex === 3) {
                return 'success-row';
            }
            return '';
        },
        fileList() {
            this.tableData = fileInfoApi.fileList()
        }
    },
    data() {
        return {
            tableData
        }
    }
}
</script>