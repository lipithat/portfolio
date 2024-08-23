// Blog.js
import './Blog.css';
import { Link } from 'react-router-dom';

export default function Blog() {
	return (
		<section className="blog-posts">
            <div>
                <Link to="/blog/nihilism" className="blog-link">
					Thoughts on Nihilism
				</Link>
			    <div className="blog-date">
                    August 22, 2024
                </div>
            </div>
            
		</section>
	);
}
