"use client"

import { motion } from "framer-motion"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import { books } from "../constants/mockData"

import styles from "./page.module.css"
import BookCard from "@/components/BookCard"

export default function Home() {
	return (
		<main className={styles.main}>
			<div>
				<Header />

				<div className={styles.containerStyle}>
					<section className={styles.content}>
						<Sidebar />
					</section>

					<div className={styles.booksContent}>
						<motion.h1
							transition={{ type: "spring", damping: 50, mass: 0.75 }}
							initial={{ opacity: 0, x: 200 }}
							animate={{ opacity: 1, x: 0 }}
							style={{ marginLeft: "30px", paddingLeft: "1rem" }}
						>
							All Books
						</motion.h1>

						<ul className={styles.ulStyle}>
							{books.map((book, i) => (
								<motion.li
									key={i}
									whileTap={{ scale: 0.9 }}
									transition={{ type: "spring", damping: 50, mass: 0.75 }}
									initial={{ opacity: 0, x: 200 * (i + 1) }}
									animate={{ opacity: 1, x: 0 }}
								>
									<a
										href={`/book/${book.id}`}
										style={{ textDecoration: "none" }}
									>
										<BookCard
											title={book.title}
											coverImage={book.image}
											description={book.description}
											onClick={() => {}}
										/>
									</a>
								</motion.li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</main>
	)
}
