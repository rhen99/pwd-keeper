<script setup>
//const props = defineProps([]);
</script>

<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-title">
        <h3>Add New Password</h3>
        <a href="#" class="modal-close">&times;</a>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="new_password">Enter Password</label>
            <input type="password" id="new_password" />
          </div>
          <div class="form-group">
            <label for="confirm_password">Re-enter Password</label>
            <input type="password" id="confirm_password" />
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Submit Password</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: hsla(0, 0%, 20%, 0.1);
}
.modal {
  background-color: #fff;
  width: 30%;
  margin: 3rem auto 0 auto;
  padding: 2rem;
}
.modal-title {
  position: relative;
}
.modal-close {
  position: absolute;
  right: 0;
  top: -30%;
  font-size: 30px;
  color: #333;
}
.modal-close:hover {
  color: #e93f3f;
}

.form-group {
  position: relative;
  padding: 1.5rem 0;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid #333;
  font-size: 19px;
}
input:focus {
  outline: none;
}
label {
  position: absolute;
  top: 30%;
  font-size: 17px;
  transition: top 300ms ease-out;
  color: #6e6e6e;
}
.write label {
  font-size: 13px;
  top: -30%;
  color: hsl(0, 79%, 58%);
}
.write input {
  border-color: hsl(0, 79%, 58%);
}
</style>
