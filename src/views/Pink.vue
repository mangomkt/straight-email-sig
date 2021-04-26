<template>
	<div>
		<div id="email-sig-wrap" ref="sigwrap">
			<div style="float: left; font-family: Arial; font-size: 16px; color: #fff; width: auto; height: auto; padding: 0px 30px 3px 0; vertical-align: top">
				<a :href="elink" target="_blank">
					<img :src="[pimage]" style="display: block; max-width: 145px; width: 100%; vertical-align: top;" class="sigimage">
				</a>
			</div>
			<div style="float: left; font-size: 16px; width: auto; height: auto; padding: 3px 0px; vertical-align: top">
				<div style="font-family: 'Helvetica', sans-serif; font-size: 19pt; color: #222; font-weight: 600; line-height: 1.2;padding-top: 24px;padding-bottom: 2px; letter-spacing: 3px;" class="signame">{{fname}}</div>
				<div style="font-family: 'Helvetica', sans-serif; font-size: 10pt; font-weight: 400; color: #222; letter-spacing: 1px; padding-top: 0px; padding-bottom: 15px;" class="sigpos">{{position}}</div>
				<div v-if="mobile != 'false'" style="font-family: 'Helvetica', sans-serif; font-size: 10pt; line-height:1.3; font-weight: 400; color: #222; letter-spacing: 1px; padding-top: 0px;display: inline-block;margin-right: 5px;"><span style="width: 14px;display: inline-block;text-align: center; color: #d50984; font-weight: 600;">M</span><span style="color: #d50984; font-weight: 600;padding-left:0px;">:</span> <a :href="mlink" style="text-decoration: none; color: #222;"><span style="display: inline-block; text-decoration: none;">{{mobile}}</span></a></div>
				<div v-if="office !== 'false'" style="font-family: 'Helvetica', sans-serif; font-size: 10pt; line-height:1.3; font-weight: 400; color: #222; letter-spacing: 1px; padding-top: 0px;display: inline-block;"><span style="width: 14px;display: inline-block;text-align: center; color: #d50984; font-weight: 600;">O</span><span style="color: #d50984; font-weight: 600;padding-left:0px;">:</span> <a :href="olink" style="text-decoration: none; color: #222;"><span style="display: inline-block; text-decoration: none;">{{office}}</span></a></div>
				<div style="font-family: sans-serif; font-size: 12px; font-weight: 400; color: #222; letter-spacing: 1px; line-height:1.3; padding-top: 0px;"><span style="width: 14px;display: inline-block;text-align: center; color: #d50984; font-weight: 600;">E</span><span style="color: #d50984; font-weight: 600;padding-left:0px;">:</span> <a :href="elink" style="text-decoration: none; color: #222;"><span style="display: inline-block; text-decoration: none;">{{email}}</span></a></div>
				<div style="font-family: sans-serif;     font-size: 12px; font-weight: 400; color: #222; letter-spacing: 1px; padding-top: 15px;">
					<a href="http://www.facebook.com/straightortho/" target="_blank" style="text-decoration: none; display: inline-block;padding: 0px; margin-right:2px;padding-left: 1px;"><img src="./icons/social-20-min.png" style="max-height: 25px; display: block;"></a>
					<a href="https://twitter.com/straightwires" target="_blank" style="text-decoration: none; display: inline-block;padding: 0px; margin: 0 4px 0 0;"><img src="./icons/social-21-min.png" style="max-height: 25px; display: block;"></a>
					<a href="https://www.youtube.com/channel/UCmzg5cl_jDqtAdnnUOIdPoA" target="_blank" style="text-decoration: none; display: inline-block;padding: 0px; margin: 0 4px 0 0;"><img src="./icons/social-22-min.png" style="max-height: 25px; display: block;"></a>
					<a href="https://www.instagram.com/straightconsulting/" target="_blank" style="text-decoration: none; display: inline-block;padding: 0px; margin: 0 4px 0 0;"><img src="./icons/social-23-min.png" style="max-height: 25px; display: block;"></a>
					<a href="https://www.linkedin.com/company/straight-consulting" target="_blank" style="text-decoration: none; display: inline-block;padding: 0px; margin: 0 2px;"><img src="./icons/social-19-min.png" style="max-height: 25px; display: block;"></a>
				</div>
			</div>
			<div style="clear: both;"></div>
			<div style="display: block; padding-top: 20px;">
				<div style="display: block; float: left; width: 234px;">
					<a href="https://www.straightconsulting.com/" style="display: block; width: 117px; float: left; text-align: left;" target="_blank"><img src="https://www.straightconsulting.com/wp-content/uploads/2020/12/straight-consulting-logo.png" style="width: 100%; height: auto; max-height: 52px; display: inline-block;" ></a>
					<a href="https://www.straightconsulting.com/tc-mastery/" style="display: block; width: 117px; float: left; text-align: center;" target="_blank"><img src="https://www.straightconsulting.com/wp-content/uploads/2020/12/tc-mastery-course-logo.png" style="width: auto; height: auto; max-height: 52px; display: inline-block;" ></a>
					<div style="clear: both;"></div>
				</div>
				<div style="display: block; float: left; width: 234px;">
					<a href="https://www.straightconsulting.com/straight-talk/"  style="display: block; width: 90px; float: left; text-align: left;" target="_blank"><img src="https://www.straightconsulting.com/wp-content/uploads/2020/12/straight-talk-logo.png" style="width: auto; height: auto; max-height: 52px; display: inline-block;" ></a>
					<a href="https://www.straightconsulting.com/orthodontic-practice-management-services/trapezio/" style="display: block; width: 108px; float: left; text-align: center;" target="_blank"><img src="https://www.straightconsulting.com/wp-content/uploads/2020/12/trapezio-logo.png" style="width: auto; height: auto; max-height: 52px; display: inline-block;" ></a>
					<div style="clear: both;"></div>
				</div>
				<div style="clear: both;"></div>
			</div>
			<div style="clear: both;"></div>
		</div>
		<transition name="fade" mode="out-in">
			<div v-show="showCode" class="CodeWrap">
				<p>HTML Code</p>
				<textarea id="CodeBox"></textarea>
			</div>
		</transition>
		<div style="display: block; clear: both;">
			<div class="btn-wrap">
				<router-link class="btn icon-btn" :to="{ name: 'Home'}">
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
						<path d="M384.834,180.699c-0.698,0-348.733,0-348.733,0l73.326-82.187c4.755-5.33,4.289-13.505-1.041-18.26	c-5.328-4.754-13.505-4.29-18.26,1.041l-82.582,92.56c-10.059,11.278-10.058,28.282,0.001,39.557l82.582,92.561	c2.556,2.865,6.097,4.323,9.654,4.323c3.064,0,6.139-1.083,8.606-3.282c5.33-4.755,5.795-12.93,1.041-18.26l-73.326-82.188	c0,0,348.034,0,348.733,0c55.858,0,101.3,45.444,101.3,101.3s-45.443,101.3-101.3,101.3h-61.58	c-7.143,0-12.933,5.791-12.933,12.933c0,7.142,5.79,12.933,12.933,12.933h61.58c70.12,0,127.166-57.046,127.166-127.166	C512,237.745,454.954,180.699,384.834,180.699z"/>
					</svg>
				</router-link>
				<button v-on:click="copyHTML" class="btn icon-btn">
					<svg height="512pt" viewBox="-40 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
						<path d="m271 512h-191c-44.113281 0-80-35.886719-80-80v-271c0-44.113281 35.886719-80 80-80h191c44.113281 0 80 35.886719 80 80v271c0 44.113281-35.886719 80-80 80zm-191-391c-22.054688 0-40 17.945312-40 40v271c0 22.054688 17.945312 40 40 40h191c22.054688 0 40-17.945312 40-40v-271c0-22.054688-17.945312-40-40-40zm351 261v-302c0-44.113281-35.886719-80-80-80h-222c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h222c22.054688 0 40 17.945312 40 40v302c0 11.046875 8.953125 20 20 20s20-8.953125 20-20zm0 0"/>
					</svg>
				</button>
				<button v-on:click="toggleCode" class="btn icon-btn">
					<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="522.468px" height="522.469px" viewBox="0 0 522.468 522.469" style="enable-background:new 0 0 522.468 522.469;" xml:space="preserve">
						<path d="M325.762,70.513l-17.706-4.854c-2.279-0.76-4.524-0.521-6.707,0.715c-2.19,1.237-3.669,3.094-4.429,5.568L190.426,440.53 c-0.76,2.475-0.522,4.809,0.715,6.995c1.237,2.19,3.09,3.665,5.568,4.425l17.701,4.856c2.284,0.766,4.521,0.526,6.71-0.712 c2.19-1.243,3.666-3.094,4.425-5.564L332.042,81.936c0.759-2.474,0.523-4.808-0.716-6.999 C330.088,72.747,328.237,71.272,325.762,70.513z"/>
						<path d="M166.167,142.465c0-2.474-0.953-4.665-2.856-6.567l-14.277-14.276c-1.903-1.903-4.093-2.857-6.567-2.857 s-4.665,0.955-6.567,2.857L2.856,254.666C0.95,256.569,0,258.759,0,261.233c0,2.474,0.953,4.664,2.856,6.566l133.043,133.044 c1.902,1.906,4.089,2.854,6.567,2.854s4.665-0.951,6.567-2.854l14.277-14.268c1.903-1.902,2.856-4.093,2.856-6.57 c0-2.471-0.953-4.661-2.856-6.563L51.107,261.233l112.204-112.201C165.217,147.13,166.167,144.939,166.167,142.465z"/>
						<path d="M519.614,254.663L386.567,121.619c-1.902-1.902-4.093-2.857-6.563-2.857c-2.478,0-4.661,0.955-6.57,2.857l-14.271,14.275 c-1.902,1.903-2.851,4.09-2.851,6.567s0.948,4.665,2.851,6.567l112.206,112.204L359.163,373.442 c-1.902,1.902-2.851,4.093-2.851,6.563c0,2.478,0.948,4.668,2.851,6.57l14.271,14.268c1.909,1.906,4.093,2.854,6.57,2.854 c2.471,0,4.661-0.951,6.563-2.854L519.614,267.8c1.903-1.902,2.854-4.096,2.854-6.57 C522.468,258.755,521.517,256.565,519.614,254.663z"/>
					</svg>
				</button>
				<button v-on:click="download" class="btn icon-btn">
					<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.867 477.867" style="enable-background:new 0 0 477.867 477.867;" xml:space="preserve">
						<path d="M409.6,153.6h-85.333c-9.426,0-17.067,7.641-17.067,17.067s7.641,17.067,17.067,17.067H409.6 c9.426,0,17.067,7.641,17.067,17.067v221.867c0,9.426-7.641,17.067-17.067,17.067H68.267c-9.426,0-17.067-7.641-17.067-17.067 V204.8c0-9.426,7.641-17.067,17.067-17.067H153.6c9.426,0,17.067-7.641,17.067-17.067S163.026,153.6,153.6,153.6H68.267 c-28.277,0-51.2,22.923-51.2,51.2v221.867c0,28.277,22.923,51.2,51.2,51.2H409.6c28.277,0,51.2-22.923,51.2-51.2V204.8 C460.8,176.523,437.877,153.6,409.6,153.6z"/>
						<path d="M335.947,243.934c-6.614-6.387-17.099-6.387-23.712,0L256,300.134V17.067C256,7.641,248.359,0,238.933,0 s-17.067,7.641-17.067,17.067v283.068l-56.201-56.201c-6.78-6.548-17.584-6.361-24.132,0.419c-6.388,6.614-6.388,17.1,0,23.713 l85.333,85.333c6.657,6.673,17.463,6.687,24.136,0.03c0.01-0.01,0.02-0.02,0.031-0.03l85.333-85.333 C342.915,261.286,342.727,250.482,335.947,243.934z"/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'Roadside',
  beforeCreate: function () {
  },
  data: function() {
	return {
      pimage: '',
      fname: '',
      position: '',
      mobile: '',
      office: '',
      email: '',
      copy: '',
      copied: 'false',
      showCode: false,
      styling: '<style type="text/css">@media(max-width:480px) {.rslogo {display: block !important;}}</style>'
    }
  },
  created() {
    this.pimage 		= this.$route.params.pimage;
    this.fname 		= this.$route.params.fname;
    this.position 	= this.$route.params.position;
    this.mobile 	= this.$route.params.mobile;
    this.office 	= this.$route.params.office;
    this.email 		= this.$route.params.email;
  },
  computed: {
	mlink() {
		return `tel:${encodeURIComponent(this.mobile)}`;
	},
	olink() {
		return `tel:${encodeURIComponent(this.office)}`;
	},
	elink() {
		return `mailto:${this.email}`;
	}
  },
  mounted: function() {
  
  },
  methods: {
	toggleCode: function() {
		this.showCode = !this.showCode,
		this.copy = this.$refs.sigwrap;
		document.getElementById("CodeBox").value = this.copy.innerHTML;
	},
	listener: function(e) {
		this.copy = this.$refs.sigwrap;
		e.clipboardData.setData("text/html", this.copy.innerHTML);
		e.clipboardData.setData("text/plain", this.copy.innerHTML);
		e.preventDefault();
	},
    copyHTML: function () {
		document.addEventListener("copy", this.listener);
		document.execCommand("copy");
		document.removeEventListener("copy", this.listener);
		let myToast = this.$toasted.show("Copied!",{
			position: "top-center"
		});
		myToast.goAway(1000);
    },
    downloadCreate: function(filename, text) {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', filename);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	},
	download: function() {
		this.copy = this.$refs.sigwrap;
		this.downloadCreate("straight-pink-email-signature.html",this.copy.innerHTML);
	}
  }
}
</script>
