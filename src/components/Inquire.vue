<template>
    <section class="main inquire mb-40">
        <div class="inquire_from">
            <form>
                <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label text-start"><span class="inquire_dot">※</span> 참가유형</label>
                <div class="col-sm-10">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>선택</option>
                        <option value="전시부스 참가">전시부스 참가</option>
                        <option value="파트너쉽 참가">파트너쉽 참가</option>
                    </select>
                </div>
                </div>
                <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label text-start"><span class="inquire_dot">※</span> 이름</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3">
                </div>
                </div>
                <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label text-start"><span class="inquire_dot">※</span> 이메일</label>
                <div class="col-sm-10">
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                    <span class="input-group-text" id="basic-addon2">@example.com</span>
                    </div>
                </div>
                </div>
                <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label text-start"><span class="inquire_dot">※</span> 핸드폰</label>
                <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3">
                </div>
                </div>
                <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label text-start"><span class="inquire_dot">※</span> 문의내용</label>
                <div class="col-sm-10">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    위의 내용을 모두 확인하였으며, 모두 동의합니다.
                </label>
                </div>
                <button type="submit" class="btn btn-primary btn-mobility" style="margin-top: 20px;">참가문의하기</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    name:"_Inquire"
}
</script>

<style>

</style>