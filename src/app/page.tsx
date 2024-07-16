import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"

import styles from "./page.module.css"

export default function Home() {
	return (
		<main className={styles.main}>
			<div>
				<Header />

				<div className={styles.containerStyle}>
					<section className={styles.content}>
						<Sidebar />
					</section>
				</div>
			</div>
		</main>
	)
}
