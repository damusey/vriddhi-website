const fs = require('fs');
const path = require('path');

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(file => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

walk('./src', (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace fonts globally
    content = content.replace(/font-display/g, 'font-sans');
    content = content.replace(/font-serif/g, 'font-sans');

    // Replace heading colors using a regex that looks for h1-h6 tags
    // and their className. This ensures we only target headings.
    content = content.replace(/(<h[1-6][^>]*?className="[^"]*?)text-brand-offwhite([^"]*?">)/g, '$1text-brand-blue-light$2');
    content = content.replace(/(<h[1-6][^>]*?className="[^"]*?)text-white([^"]*?">)/g, '$1text-brand-blue-light$2');
    // Also cover single quotes just in case
    content = content.replace(/(<h[1-6][^>]*?className='[^']*?)text-brand-offwhite([^']*?'>)/g, '$1text-brand-blue-light$2');
    content = content.replace(/(<h[1-6][^>]*?className='[^']*?)text-white([^']*?'>)/g, '$1text-brand-blue-light$2');

    // Additionally, the Hero component h1 uses text-brand-offwhite.
    // CaseStudies h1 uses text-white. Services h1 uses text-brand-offwhite. Contact h1 text-brand-offwhite.

    // Some elements might be motion.h1
    content = content.replace(/(<motion\.h[1-6][^>]*?className="[^"]*?)text-brand-offwhite([^"]*?">)/g, '$1text-brand-blue-light$2');
    content = content.replace(/(<motion\.h[1-6][^>]*?className="[^"]*?)text-white([^"]*?">)/g, '$1text-brand-blue-light$2');


    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Updated: ', file);
    }
  });
});
