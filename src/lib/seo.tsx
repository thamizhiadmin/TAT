import { useEffect } from 'react'

type Props = { title: string; description?: string }

export default function SEO({ title, description }: Props) {
	useEffect(() => {
		document.title = title
		if (description) {
			let el = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
			if (!el) {
				el = document.createElement('meta')
				el.name = 'description'
				document.head.appendChild(el)
			}
			el.content = description
		}
	}, [title, description])
	return null
}

