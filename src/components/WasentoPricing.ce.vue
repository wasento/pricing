<template>
	<div class="container-fluid">
		<template v-if="loading">
			<div class="d-flex justify-content-center">
			    <div class="spinner-border" role="status">
			        <span class="visually-hidden">Loading...</span>
			    </div>
			</div>
		</template>
		<template v-else>
			<div class="d-flex justify-content-center mb-5">
				<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
				    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" :checked="isActive === 'price1Month'" v-on:click="isActive = 'price1Month'">
				    <label class="btn btn-outline-primary" for="btnradio1">1 {{language.month}}</label>
				    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" :checked="isActive === 'price12Month'" v-on:click="isActive = 'price12Month'">
				    <label class="btn btn-outline-primary" for="btnradio2">1 {{language.year}}</label>
				</div>
			</div>
			<div class="row">
				<div class="col-12 col-lg-4">
					<div class="card plan-price">
					    <div class="card-header text-center py-3">
					        FREE TRIAL
					    </div>
						<div class="card-body text-center text-bg-grey">
							<h4 class="card-title">GRATIS</h4>
							<hr class="dropdown-divider">
						</div>
					    <ul class="list-group list-group-flush wasmall">
					    	<li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>200</strong> {{language.message}} /{{language.month}}</li>
					    	<li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>1</strong> {{language.contactbot}}</li>
					    	<li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>1</strong> TikTok Live Chat</li>
					    	<li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>1</strong> YouTube Live Chat</li>
					    	<li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>Unlimited</strong> {{language.chatbot}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>Unlimited</strong> {{language.autoreply}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>Unlimited</strong> Media</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>Unlimited</strong> {{language.phonebook}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.importcontact}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.importgroupcontact}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.plaintext}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.textmedia}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.contactmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.locationmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.pollingmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> Webhook</li>
					        <!-- 
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.schedulingmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.sentogroup}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.warotator}}</li>
					        <li class="list-group-item text-muted">&#x2715;  {{language.fubot}}</li>
					        <li class="list-group-item text-muted">&#x2715; Form Builder</li>
					        <li class="list-group-item text-muted">&#x2715; Bio Link</li>
					        <li class="list-group-item text-muted">&#x2715; Broadcast</li>
					        <li class="list-group-item text-muted">&#x2715; {{language.broadcastmulti}}</li>
					        <li class="list-group-item text-muted">&#x2715; API</li>
					         -->
					    </ul>
						<div class="card-footer">
							<div class="d-grid">
								<a class="btn btn-outline-dark" href="https://app.wasento.com/device">{{language.subscribe}}</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-lg-4" v-for="plan in rows" :key="plan.id">
					<div class="card plan-price">
					    <div class="card-header text-center  py-3" :class="'text-bg-'+plan.name">
					        {{plan.name.toUpperCase()}}
					    </div>
						<div class="card-body text-center" :class="'text-bg-'+plan.name">
							<h4 class="card-title">{{price.length ? new Intl.NumberFormat('id-ID').format(price[plan.id]) : new Intl.NumberFormat('id-ID').format(plan.price1Month)}} <small>/{{language.month}}</small></h4>
							<hr class="dropdown-divider">
						</div>
					    <ul class="list-group list-group-flush wasmall">
					    	<template v-if="plan.totalUsage">
					    		<li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>{{new Intl.NumberFormat('id-ID').format(plan.totalUsage)}}</strong> {{language.message}} /{{language.month}}</li>
					    	</template>
					    	<template v-else>
					    		<li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>Unlimited</strong> {{language.message}}</li>
					    	</template>
					    	<template v-if="plan.totalContactBot">
					    		<li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>{{new Intl.NumberFormat('id-ID').format(plan.totalContactBot)}}</strong> {{language.contactbot}} /{{language.month}}</li>
					    	</template>
					    	<template v-else>
					    		<li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>Unlimited</strong> {{language.contactbot}}</li>
					    	</template>
					    	<template v-if="plan.totalTikTokLiveChat">
					    		<li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>{{new Intl.NumberFormat('id-ID').format(plan.totalTikTokLiveChat)}}</strong> TikTok Live Chat /{{language.month}}</li>
					    	</template>
					    	<template v-else>
					    		<li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>Unlimited</strong> TikTok Live Chat</li>
					    	</template>
					    	<template v-if="plan.totalYouTubeLiveChat">
					    		<li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>{{new Intl.NumberFormat('id-ID').format(plan.totalYouTubeLiveChat)}}</strong> YouTube Live Chat /{{language.month}}</li>
					    	</template>
					    	<template v-else>
					    		<li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>Unlimited</strong> YouTube Live Chat</li>
					    	</template>
					    	<li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>Unlimited</strong> {{language.chatbot}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>Unlimited</strong> {{language.autoreply}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>Unlimited</strong> Media</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>Unlimited</strong> {{language.phonebook}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.importcontact}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.importgroupcontact}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.plaintext}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.textmedia}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.contactmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.locationmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.pollingmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> Webhook</li>
					        <!-- 
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.schedulingmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.sentogroup}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.warotator}}</li>
					        <li class="list-group-item text-muted">&#x2715;  {{language.fubot}}</li>
					        <li class="list-group-item text-muted">&#x2715; Form Builder</li>
					        <li class="list-group-item text-muted">&#x2715; Bio Link</li>
					        <li class="list-group-item text-muted">&#x2715; Broadcast</li>
					        <li class="list-group-item text-muted">&#x2715; {{language.broadcastmulti}}</li>
					        <li class="list-group-item text-muted">&#x2715; API</li>
					         -->
					    </ul>
						<div class="card-footer">
							<div class="d-grid">
								<a class="btn" :class="'text-bg-'+plan.name" href="https://app.wasento.com/device">{{language.subscribe}}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>
<script>
import { defineComponent } from 'vue'
import axios from 'axios'
import appStyles from '../app.scss?inline'

export default defineComponent({
    name: 'WasentoPricing',
    styles: [appStyles],
    props: {
        lang: 'id',
    },
    mounted() {
        this.getData()
    },
    data() {
        return {
        	loading: true,
        	rows: [],
            isActive: 'price1Month',
            allowedContactBotPlan: [4,5,6],
            price: []
        }
    },
    watch: {
    	isActive(val) {
    		const data = this.rows
    		let dataArr = []
    		const month = val.replace ( /[^\d.]/g, '' )
    		data.map((item) => {
    			dataArr[item.id] = Math.floor(item[val] / month)
    		})
    		this.price = dataArr
    	}
    },
    methods: {
        getData() {
            axios.get('https://app.wasento.com/api/plan').then((response) => {
                this.rows = response.data.results
            }).catch((e) => {
            	console.log(e)
            }).finally(() => {
            	this.loading = false
            })
        }
    },
    computed: {
        language() {
            let data = {}

            if ('id' === this.lang) {
            	data.subscribe = 'Beralangganan'
            	data.year = 'tahun'
                data.month = 'bulan'
                data.message = 'Pesan'
                data.chatbot = 'Robot Chat'
                data.autoreply = 'Balasan Otomatis'
                data.contactbot = 'Robot Kontak'
                data.importcontact = 'Impor / Ekspor Kontak'
                data.importgroupcontact = 'Impor / Ekspor Grup Kontak'
                data.unlimitedmedia = 'Unlimited Media'
                data.phonebook = 'Buku Telepon'
                data.plaintext = 'Pesan Teks Biasa'
                data.textmedia = 'Pesan Teks & Media'
                data.contactmessage = 'Pesan Teks Kontak'
                data.locationmessage = 'Pesan Teks Lokasi'
                data.pollingmessage = 'Pesan Teks Polling'
                data.schedulingmessage = 'Pesan Terjadwal'
                data.sentogroup = 'Kirim Pesan ke Grup'
                data.warotator = 'Rotasi WA'
                data.fubot = 'Robot Follow Up'
                data.broadcastmulti = 'Broadcast++'
            } else {
            	data.subscribe = 'Subscribe'
            	data.year = 'years'
                data.month = 'months'
                data.message = 'Message'
                data.chatbot = 'Chatbot'
                data.autoreply = 'Auto Reply'
                data.contactbot = 'Contact Bot'
                data.importcontact = 'Import / Export Contact'
                data.importgroupcontact = 'Import / Export Group Contact'
                data.unlimitedmedia = 'Unlimited Media'
                data.phonebook = 'Phonebook'
                data.plaintext = 'Plain Text Message'
                data.textmedia = 'Text & Media Message'
                data.contactmessage = 'Text With Contact'
                data.locationmessage = 'Text With Location'
                data.pollingmessage = 'Text With Polling'
                data.schedulingmessage = 'Scheduled Messages'
                data.sentogroup = 'Send Message To Group'
                data.warotator = 'WA Rotator'
                data.fubot = 'Follow Up Bot'
                data.broadcastmulti = 'Multi Devices Broadcast'
            }

            return data
        }
    }
})
</script>