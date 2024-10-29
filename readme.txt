=== USA Zip Codes by WP Monsters ===
Contributors: Wordpress Monsters
Tags: zip-code, state, city
Requires at least: 4.2.2
Tested up to: 4.7.2
Stable tag: 1.0
License: GPLv2 or later

Choose USA zip codes for your post types.

== Description ==

Plugin contains American zip code database. You can activate this plugin for any post type in settings. After activation you can set zip codes for all of your posts. To connect zip code with the post you should do only 3 steps: 1) Choose State ( then the plugin will display all available cities in the chosen state)  2) Choose City ( then you will see all available Zip codes in this city)
3) Choose Zip code. Also you can connect several zip codes to one post. Use <?php echo get_post_meta( $post->ID, 'zipFields', true ); ?>to get an array of connected zip codes.

== Installation ==

1. Upload this plugin to '/wp-content/plugins/' folder.
2. Activate it Plugins section.
3. Set plugin options in Settings -> Zip-codes and after that click 'Save Changes'.
4. Go to selected post type and choose your zip codes.
5. If you want the chosen ones in frontend you can use get_post_meta( $post->ID, 'zipFields', true ). This function gives you an array of all zip codes you chose.

== Frequently Asked Questions ==

All question send to our email - sales@wpmonsters.org

== Screenshots ==

1. This screenshot shows how the plugin looks in admin side.
2. This screenshot shows the array you get after use get_post_meta().
3. This screenshot shows the settings page of this plugin.
