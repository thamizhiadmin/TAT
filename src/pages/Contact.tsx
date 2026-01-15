import { useState } from 'react'
import SEO from '../lib/seo'
import { FORMSPREE_ID } from '../lib/config'

export default function Contact() {
	const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setStatus('sending')
		const form = e.currentTarget
		const data = new FormData(form)
		try {
			if (!FORMSPREE_ID) {
				throw new Error('Formspree ID not configured. Please set VITE_FORMSPREE_ID in .env or update config.ts')
			}
			const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, { 
				method: 'POST', 
				body: data, 
				headers: { Accept: 'application/json' } 
			})
			if (res.ok) { 
				form.reset()
				setStatus('idle')
				alert('Thank you! We have received your message and will get back to you soon.')
			} else {
				const errorData = await res.json().catch(() => ({}))
				console.error('Formspree error:', errorData)
				throw new Error('Failed to send message')
			}
		} catch (err) { 
			console.error('Form submission error:', err)
			setStatus('error') 
		}
	}

	return (
		<div className="container section" id="contact">
			<SEO title="Contact – Thamizhi Automate Technology" description="Get in touch for SharePoint, Power Platform, React and automation projects." />
			<h2 className="fw-bold mb-4" style={{ fontFamily: 'Poppins' }}>Contact</h2>
			<div className="row g-4">
				<div className="col-lg-6">
					<form onSubmit={onSubmit} className="card bg-dark border-secondary">
						<div className="card-body">
							<div className="row g-3">
								<div className="col-md-6">
									<label className="form-label">Name</label>
									<input name="name" className="form-control bg-transparent text-light border-secondary" required />
								</div>
								<div className="col-md-6">
									<label className="form-label">Email</label>
									<input type="email" name="email" className="form-control bg-transparent text-light border-secondary" required />
								</div>
								<div className="col-12">
									<label className="form-label">Company</label>
									<input name="company" className="form-control bg-transparent text-light border-secondary" />
								</div>
								<div className="col-12">
									<label className="form-label">Message</label>
									<textarea name="message" rows={5} className="form-control bg-transparent text-light border-secondary" required />
								</div>
							</div>
						</div>
						<div className="card-footer d-flex align-items-center justify-content-between">
							<button className="btn btn-emerald" disabled={status==='sending'}>
								{status==='sending'?'Sending...':'Send Message'}
							</button>
							{status==='error' && (
								<span className="text-danger">
									Unable to send. Please configure Formspree ID in src/config.ts
								</span>
							)}
						</div>
					</form>
				</div>
				<div className="col-lg-6">
					<div className="card bg-dark border-secondary h-100">
						<div className="card-body">
							<h5>Reach Us</h5>
							<p className="text-secondary mb-1">Email: info@tamizhiautomatetechnology.in</p>
							<p className="text-secondary">Phone: +91-93455-23197</p>
							<div className="ratio ratio-16x9 border border-secondary rounded">
								<iframe title="map" src="https://maps.google.com/maps?q=chennai&t=&z=11&ie=UTF8&iwloc=&output=embed"></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

