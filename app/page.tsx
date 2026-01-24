import Contact from './components/contact';
import Hero from './components/hero/hero';
import Intro from './components/intro';
import Skills from './components/skills/skills';
import Experience from './components/experience/experience';
import Education from './components/education';
import Works from './components/work/works';
import { ScrollProvider } from './components/providers/ScrollProvider';

export default function Home() {
	return (
		<ScrollProvider>
			<Hero />
			<Intro />
			<Works />
			<Skills />
			<Experience />
			<Education />
			<Contact />
		</ScrollProvider>
	);
}
