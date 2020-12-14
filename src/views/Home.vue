<template>
	<div>
		<div>
			<label for="pimage">Profile Image *</label>
			<input id="pimage" name="pimage" v-model="pimage" type="text">
		</div>
		<div>
			<label for="fname">Full Name *</label>
			<input id="fname" name="fname" v-model="fname" type="text">
		</div>
		<div>
			<label for="position">Position Title *</label>
			<input id="position" name="position" v-model="position" type="text">
		</div>
		<div>
			<label for="mobile">Mobile Number *</label>
			<input id="mobile" name="mobile" v-model="mobile" type="text">
		</div>
		<div>
			<label for="office">Office Number</label>
			<input id="office" name="office" v-model="office" type="text">
		</div>
		<div>
			<label for="email">Email *</label>
			<input id="email" name="email" v-model="email" type="text">
		</div>
		<div class="btn-wrap">
			<router-link class="btn red-btn" :to="{ name: 'Red', params: {  pimage: pimage || '//via.placeholder.com/150', fname: fname || 'Your Name', position: position || 'What you do', mobile: mobile || 'false', office: office || 'false', email: email || 'me@me.com' } }">Red</router-link>
			<router-link class="btn purple-btn" :to="{ name: 'Purple', params: {  pimage: pimage || '//via.placeholder.com/150', fname: fname || 'Your Name', position: position || 'What you do', mobile: mobile || 'false', office: office || 'false', email: email || 'me@me.com' } }">Purple</router-link>
			<router-link class="btn pink-btn" :to="{ name: 'Pink', params: {  pimage: pimage || '//via.placeholder.com/150', fname: fname || 'Your Name', position: position || 'What you do', mobile: mobile || 'false', office: office || 'false', email: email || 'me@me.com' } }">Pink</router-link>
			<router-link class="btn orange-btn" :to="{ name: 'Orange', params: {  pimage: pimage || '//via.placeholder.com/150', fname: fname || 'Your Name', position: position || 'What you do', mobile: mobile || 'false', office: office || 'false', email: email || 'me@me.com' } }">Orange</router-link>
		</div>
	</div>
</template>
<script>

export default {
  name: 'Home',
  beforeCreate: function () {
  },
  data: function() {
    return {
      pimage: '',
      fname: '',
      position: '',
      mobile: '',
      office: '',
      email: ''
    }
  },
  mounted() {
	let urlParams = new URLSearchParams(window.location.search);
	let pimageURL = urlParams.get('pimage');
	let fnameURL = urlParams.get('fname');
	let positionURL = urlParams.get('position');
	let mobileURL = urlParams.get('mobile');
	let officeURL = urlParams.get('office');
	let emailURL = urlParams.get('email');
	if(pimageURL) {
		this.pimage = pimageURL;
	} else {
		if(localStorage.pimage) {
			this.pimage = localStorage.pimage;
		}
	}
	if(fnameURL) {
		this.fname = fnameURL;
	} else {
		if(localStorage.pimage) {
			this.fname = localStorage.fname;
		}
	}
	if(positionURL) {
		this.position = positionURL;
	} else {
		if(localStorage.position) {
			this.position = localStorage.position;
		}
	}
	if(mobileURL) {
		this.mobile = mobileURL;
	} else {
		if(localStorage.mobile) {
			this.mobile = localStorage.mobile;
		}
	}
	if(officeURL) {
		this.office = officeURL;
	} else {
		if(localStorage.office) {
			this.office = localStorage.office;
		}
	}
	if(emailURL) {
		this.email = emailURL;
	} else {
		if(localStorage.position) {
			this.email = localStorage.email;
		}
	}
  },
  watch:{
	pimage(newName) {
		localStorage.pimage = newName;
	},
	fname(newName) {
		localStorage.fname = newName;
	},
	position(newName) {
		localStorage.position = newName;
	},
	mobile(newName) {
		localStorage.mobile = newName;
	},
	office(newName) {
		localStorage.office = newName;
	},
	email(newName) {
		localStorage.email = newName;
	}
  }
}
</script>
