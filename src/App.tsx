import { useTranslation } from "react-i18next"

function App() {
	const { t } = useTranslation()
	return (
		<div className=' bg-green-500 text-blue-500'>
			<p className='text-lg text-red-400'> {t("APP_TITLE")}</p>
		</div>
	)
}

export default App
