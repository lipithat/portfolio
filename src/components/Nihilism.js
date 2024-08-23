// Blog.js
import './Nihilism.css';
import { Link } from 'react-router-dom';

export default function Nihilism() {
	return (
		<section className="post">
            <div>
                <div className="title">
					My Thoughts on Nihilism
				</div>
			    <div className="date">
                    <i>August 22, 2024</i>
                </div><br/><br/>
                <p className="contents">
                    Nihilism is something I think about a lot. I was first introduced to the 
                    concept through the show The Good Place (highly recommend btw). One of the 
                    main characters, Chidi Anagonye was a moral philosophy professor and he 
                    would spend much of his afterlife explaining various moral philosophies 
                    (surprise surprise).<br/><br/>

                    <div className="spoilers">
                        SPOILERS AHEAD!!!!<br/><br/>
                    </div>

                    There was this one particular moment of the show that stood out to me though. 
                    It was when Chidi had a mental breakdown after learning that everyone 
                    inevitably goes to the Bad Place after they die. As a result of this realization, 
                    Chidi goes insane and makes <a className="video" href="https://www.youtube.com/watch?v=2c-AawAKZ14">Peeps Chili</a>.
                    But more notably, he explains the meaning of life to his students.<br/><br/>
                    
                    In that scene, Chidi discusses the 3 main philosophies to leading an ethical life:
                    virtue ethics, consequentialism, and <i>nihilism</i>. But considering that nothing you
                    do actually matters and everyone goes straight to the Bad Place in the end, the most
                    intuitive ethical system to follow is nihilism. "The world is empty, there is no point
                    to anything and you're just going to die".<br/><br/>

                    So 15-year old me was incredibly intrigued by this monologue. It was during a period in my life
                    where I was experiencing religious confusion. Although that's a whole other can of worms, in short, I was 
                    confused about which religion was correct and what to follow. Was there even an afterlife to look
                    forward to? If there was none, then why should I care about anything? What's the point of doing
                    anything or trying to make something of myself? Why do I bother working so hard in school or 
                </p>
            </div>
            
		</section>
	);
}
