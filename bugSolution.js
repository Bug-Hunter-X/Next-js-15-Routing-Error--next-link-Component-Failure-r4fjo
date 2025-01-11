```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```
**pages/about.js**
```javascript
function AboutPage() {
  return <h1>About Us</h1>;
}

export default AboutPage;
```
**next.config.js**
Ensure your `next.config.js` is correctly configured, If you have custom routing or other configurations make sure it doesn't conflict with the routing of the app.  If you are unsure, it's best to start with a clean configuration to confirm that your settings aren't causing conflicts.  Removing any custom settings in this file is a good first troubleshooting step.