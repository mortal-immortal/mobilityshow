<template>
    <section class="main notice">
        <table class="table table-striped table-hover">
            <thead>
            <tr>
                <th scope="col">No</th>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(a,i) in noticeData" :key="i">
                <th scope="row">{{noticeData[i].no}}</th>
                <td>{{noticeData[i].title}}</td>
                <td>{{noticeData[i].date}}</td>
            </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center" style="margin: 20px 0 60px 0;">
            <li class="page-item disabled">
                <a class="page-link">Previous</a>
            </li>
            <li class="page-item"><a class="page-link page-gray" href="#">1</a></li>
            <li class="page-item"><a class="page-link page-gray" href="#">2</a></li>
            <li class="page-item"><a class="page-link page-gray" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link page-gray" href="#">Next</a>
            </li>
            </ul>
        </nav>
    </section>
</template>

<script>
export default {
    name:"_Notice",
    props:{
        noticeData:Object,
    }
}
</script>

<style>

</style>