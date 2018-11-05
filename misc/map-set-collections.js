const profiles = new Map(); 

profiles.set('twitter', '@tzyurash'); 
profiles.set('facebook', '@tzyurash'); 
profiles.set('googleplus', '@tzyurash'); 

profiles.size; 
profiles.has('twitter'); // true
profiles.get('twitter'); // @tzyurash
profiles.has('youtube'); // false
profiles.delete('facebook'); 
profiles.has('facebook'); // false 
profiles.get('facebook'); // undefined 

for ( const entry of profiles ) {
  console.log(entry); 
}
