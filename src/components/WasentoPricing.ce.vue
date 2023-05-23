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
			<nav class="nav nav-pills justify-content-center">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#">1 {{language.month}}</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" aria-current="page" href="#">3 {{language.month}}</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" aria-current="page" href="#">6 {{language.month}}</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" aria-current="page" href="#">12 {{language.month}}</a>
				</li>
			</nav>
			<hr>
			<div class="row g-3">
				<div class="col-12 col-xl-2">
					<div class="card plan-price">
					    <div class="card-header text-center">
					        FREE
					    </div>
						<div class="card-body text-center text-bg-grey">
							<h4 class="card-title">0 <small>/{{language.month}}</small></h4>
							<hr class="dropdown-divider">
						</div>
					    <ul class="list-group list-group-flush wasmall">
					    	<li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>1.000</strong> {{language.message}} /{{language.month}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.chatbot}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.autoreply}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.importcontact}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.importgroupcontact}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.unlimitedmedia}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.unlimitedphonebook}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.schedulingmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.sentogroup}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.warotator}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.plaintext}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.textmedia}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.contactmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.locationmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.pollingmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> Webhook</li>
					        <li class="list-group-item text-muted">&#x2715; Form Builder</li>
					        <li class="list-group-item text-muted">&#x2715; Bio Link</li>
					        <li class="list-group-item text-muted">&#x2715; Broadcast</li>
					        <li class="list-group-item text-muted">&#x2715; {{language.broadcastmulti}}</li>
					        <li class="list-group-item text-muted">&#x2715; {{language.contactbot}}</li>
					        <li class="list-group-item text-muted">&#x2715;  {{language.fubot}}</li>
					        <li class="list-group-item text-muted">&#x2715; API</li>
					    </ul>
						<div class="card-footer">
							<div class="d-grid">
								<button class="btn btn-outline-dark" type="button">Button</button>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-xl-2" v-for="plan in rows" :key="id">
					<div class="card plan-price">
					    <div class="card-header text-center" :class="'text-bg-'+plan.name">
					        {{plan.name.toUpperCase()}}
					    </div>
						<div class="card-body text-center" :class="'text-bg-'+plan.name">
							<h4 class="card-title">{{new Intl.NumberFormat('id-ID').format(plan.price1Month)}} <small>/{{language.month}}</small></h4>
							<hr class="dropdown-divider">
						</div>
					    <ul class="list-group list-group-flush wasmall">
					    	<li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>{{plan.totalUsage ? new Intl.NumberFormat('id-ID').format(plan.totalUsage) : 'Unlimited'}}</strong> {{language.message}} /{{language.month}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.chatbot}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.autoreply}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.importcontact}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.importgroupcontact}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.unlimitedmedia}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.unlimitedphonebook}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.schedulingmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.sentogroup}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.warotator}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.plaintext}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.textmedia}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.contactmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.locationmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.pollingmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> Webhook</li>
					        <li class="list-group-item text-muted">&#x2715; Form Builder</li>
					        <li class="list-group-item text-muted">&#x2715; Bio Link</li>
					        <li class="list-group-item text-muted">&#x2715; Broadcast</li>
					        <li class="list-group-item text-muted">&#x2715; {{language.broadcastmulti}}</li>
					        <li class="list-group-item text-muted">&#x2715; {{language.contactbot}}</li>
					        <li class="list-group-item text-muted">&#x2715;  {{language.fubot}}</li>
					        <li class="list-group-item text-muted">&#x2715; API</li>
					    </ul>
						<div class="card-footer">
							<div class="d-grid">
								<button class="btn btn-primary" type="button">Button</button>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-xl-2">
					<div class="card plan-price">
					    <div class="card-header text-center text-bg-secondary">
					        WHITELABEL
					    </div>
						<div class="card-body text-center text-bg-secondary">
							<h4 class="card-title">25.000 <small>/{{language.month}}</small></h4>
							<hr class="dropdown-divider">
						</div>
					    <ul class="list-group list-group-flush wasmall">
					    	<li class="list-group-item"><span class="text-success">&#x2713;</span> <strong>1.000</strong> {{language.message}} /{{language.month}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.chatbot}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.autoreply}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.importcontact}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.importgroupcontact}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.unlimitedmedia}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.unlimitedphonebook}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.schedulingmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.sentogroup}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.warotator}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.plaintext}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.textmedia}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.contactmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.locationmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> {{language.pollingmessage}}</li>
					        <li class="list-group-item"><span class="text-success">&#x2713;</span> Webhook</li>
					        <li class="list-group-item text-muted">&#x2715; Form Builder</li>
					        <li class="list-group-item text-muted">&#x2715; Bio Link</li>
					        <li class="list-group-item text-muted">&#x2715; Broadcast</li>
					        <li class="list-group-item text-muted">&#x2715; {{language.broadcastmulti}}</li>
					        <li class="list-group-item text-muted">&#x2715; {{language.contactbot}}</li>
					        <li class="list-group-item text-muted">&#x2715;  {{language.fubot}}</li>
					        <li class="list-group-item text-muted">&#x2715; API</li>
					    </ul>
						<div class="card-footer">
							<div class="d-grid">
								<button class="btn btn-secondary" type="button">Button</button>
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
            isActive: 'pictures',
            columns: {
                date: 'Date',
                price: 'Price',
                status: 'Status',
            },
            items: [{
                    date: "2021-02-03 22:04:16",
                    price: "$32.000",
                    status: 1,
                },
                {
                    date: "2021-02-03 22:04:16",
                    price: "$69.000",
                    status: 1,
                }
            ]
        }
    },
    methods: {
        getData() {
            axios.get('https://api.wasento.com/api/plan').then((response) => {
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
                data.month = 'bulan'
                data.message = 'pesan'
                data.chatbot = 'Robot Chat'
                data.autoreply = 'Balasan Otomatis'
                data.contactbot = 'Robot Kontak'
                data.importcontact = 'Impor Kontak'
                data.importgroupcontact = 'Impor Grup Kontak'
                data.unlimitedmedia = 'Unlimited Media'
                data.unlimitedphonebook = 'Unlimited Buku Telepon'
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
                data.month = 'months'
                data.message = 'message'
                data.chatbot = 'Chatbot'
                data.autoreply = 'Auto Reply'
                data.contactbot = 'Contact Bot'
                data.importcontact = 'Import Contact'
                data.importgroupcontact = 'Import Group Contact'
                data.unlimitedmedia = 'Unlimited Media'
                data.unlimitedphonebook = 'Unlimited Phonebook'
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