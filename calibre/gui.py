# preferences for the calibre GUI

### Begin group: DEFAULT
 
# send to storage card by default
# Send file to storage card instead of main memory by default
send_to_storage_card_by_default = False
 
# confirm delete
# Confirm before deleting
confirm_delete = False
 
# main window geometry
# Main window geometry
main_window_geometry = cPickle.loads('\x80\x02csip\n_unpickle_type\nq\x01U\x0cPyQt5.QtCoreq\x02U\nQByteArrayU2\x01\xd9\xd0\xcb\x00\x02\x00\x00\x00\x00\x00-\x00\x00\x00\x1b\x00\x00\x05U\x00\x00\x02\xff\x00\x00\x00\x00\x00\x00\x00/\x00\x00\x06[\x00\x00\x01\xa2\x00\x00\x00\x00\x02\x00\x00\x00\x05V\x85\x87Rq\x03.')
 
# new version notification
# Notify when a new version is available
new_version_notification = True
 
# use roman numerals for series number
# Use Roman numerals for series number
use_roman_numerals_for_series_number = True
 
# sort tags by
# Sort tags list by name, popularity, or rating
sort_tags_by = u'popularity'
 
# match tags type
# Match tags by any or all.
match_tags_type = 'any'
 
# cover flow queue length
# Number of covers to show in the cover browsing mode
cover_flow_queue_length = 6
 
# LRF conversion defaults
# Defaults for conversion to LRF
LRF_conversion_defaults = cPickle.loads('\x80\x02]q\x01.')
 
# LRF ebook viewer options
# Options for the LRF e-book viewer
LRF_ebook_viewer_options = None
 
# internally viewed formats
# Formats that are viewed using the internal viewer
internally_viewed_formats = cPickle.loads('\x80\x02]q\x01(U\x03LRFq\x02U\x04EPUBq\x03U\x03LITq\x04U\x04MOBIq\x05U\x03PRCq\x06U\x04POBIq\x07U\x03AZWq\x08U\x04AZW3q\tU\x04HTMLq\nU\x03FB2q\x0bU\x03PDBq\x0cU\x02RBq\rU\x03SNBq\x0eU\x05HTMLZq\x0fU\x05KEPUBq\x10e.')
 
# column map
# Columns to be displayed in the book list
column_map = cPickle.loads('\x80\x02]q\x01(U\x05titleq\x02U\x08ondeviceq\x03U\x07authorsq\x04U\x04sizeq\x05U\ttimestampq\x06U\x06ratingq\x07U\tpublisherq\x08U\x04tagsq\tU\x06seriesq\nU\x07pubdateq\x0be.')
 
# autolaunch server
# Automatically launch Content server on application startup
autolaunch_server = False
 
# oldest news
# Oldest news kept in database
oldest_news = 3
 
# systray icon
# Show system tray icon
systray_icon = False
 
# upload news to device
# Upload downloaded news to device
upload_news_to_device = True
 
# delete news from library on upload
# Delete news books from library after uploading to device
delete_news_from_library_on_upload = False
 
# separate cover flow
# Show the cover flow in a separate window instead of in the main calibre window
separate_cover_flow = True
 
# disable tray notification
# Disable notifications from the system tray icon
disable_tray_notification = False
 
# default send to device action
# Default action to perform when the "Send to device" button is clicked
default_send_to_device_action = 'DeviceAction:carda:0:False:False'
 
# asked library thing password
# Asked library thing password at least once.
asked_library_thing_password = False
 
# search as you type
# Start searching as you type. If this is disabled then search will only take place when the Enter or Return key is pressed.
search_as_you_type = False
 
# highlight search matches
# When searching, show all books with search results highlighted instead of showing only the matches. You can use the N or F3 keys to go to the next match.
highlight_search_matches = False
 
# save to disk template history
# Previously used Save to Disk templates
save_to_disk_template_history = cPickle.loads('\x80\x02]q\x01.')
 
# send to device template history
# Previously used Send to Device templates
send_to_device_template_history = cPickle.loads('\x80\x02]q\x01X!\x00\x00\x00{author_sort}/{title} - {authors}q\x02a.')
 
# main search history
# Search history for the main GUI
main_search_history = cPickle.loads('\x80\x02]q\x01(X\x05\x00\x00\x00cyberq\x02X%\x00\x00\x00tags:"=recentlyAdded"&& tags:"=JSTOR"q\x03X\x04\x00\x00\x00astaq\x04X\x06\x00\x00\x00paniniq\x05X\x0b\x00\x00\x00orhan pamukq\x06X\x05\x00\x00\x00cleanq\x07X\t\x00\x00\x00kuberneteq\x08X\x06\x00\x00\x00dockerq\tX\x06\x00\x00\x00designq\nX\x06\x00\x00\x00changeq\x0bX\x03\x00\x00\x00sdgq\x0cX\x08\x00\x00\x00strategyq\rX\t\x00\x00\x00tim brownq\x0eX\x07\x00\x00\x00mindsetq\x0fX\x03\x00\x00\x00pwdq\x10X\r\x00\x00\x00annual reportq\x11X\n\x00\x00\x00prativedanq\x12X\x0c\x00\x00\x00constitutionq\x13X\x06\x00\x00\x00miningq\x14X\x08\x00\x00\x00dataminiq\x15X\x04\x00\x00\x00dataq\x16X\x15\x00\x00\x00tags:"=recentlyAdded"q\x17X\x17\x00\x00\x00Series:"=Annual Report"q\x18X\x14\x00\x00\x00Tag:"=Annual Report"q\x19X\n\x00\x00\x00tag:"=DPR"q\x1ae.')
 
# viewer search history
# Search history for the e-book viewer
viewer_search_history = cPickle.loads('\x80\x02]q\x01X\n\x00\x00\x00duplicatesq\x02a.')
 
# viewer toc search history
# Search history for the ToC in the e-book viewer
viewer_toc_search_history = cPickle.loads('\x80\x02]q\x01.')
 
# lrf viewer search history
# Search history for the LRF viewer
lrf_viewer_search_history = cPickle.loads('\x80\x02]q\x01.')
 
# scheduler search history
# Search history for the recipe scheduler
scheduler_search_history = cPickle.loads('\x80\x02]q\x01.')
 
# plugin search history
# Search history for the plugin preferences
plugin_search_history = cPickle.loads('\x80\x02]q\x01X\x03\x00\x00\x00jobq\x02a.')
 
# shortcuts search history
# Search history for the keyboard preferences
shortcuts_search_history = cPickle.loads('\x80\x02]q\x01.')
 
# jobs search history
# Search history for the tweaks preferences
jobs_search_history = cPickle.loads('\x80\x02]q\x01.')
 
# tweaks search history
# Search history for tweaks
tweaks_search_history = cPickle.loads('\x80\x02]q\x01X\x03\x00\x00\x00jobq\x02a.')
 
# worker limit
# Maximum number of simultaneous conversion/news download jobs. This number is twice the actual value for historical reasons.
worker_limit = 2
 
# get social metadata
# Download social metadata (tags/rating/etc.)
get_social_metadata = True
 
# overwrite author title metadata
# Overwrite author and title with new metadata
overwrite_author_title_metadata = True
 
# auto download cover
# Automatically download the cover, if available
auto_download_cover = False
 
# enforce cpu limit
# Limit max simultaneous jobs to number of CPUs
enforce_cpu_limit = True
 
# gui layout
# The layout of the user interface. Wide has the Book details panel on the right and narrow has it at the bottom.
gui_layout = 'wide'
 
# show avg rating
# Show the average rating per item indication in the Tag browser
show_avg_rating = True
 
# disable animations
# Disable UI animations
disable_animations = False
 
# tag browser hidden categories
# tag browser categories not to display
tag_browser_hidden_categories = cPickle.loads('\x80\x02c__builtin__\nset\nq\x01]\x85Rq\x02.')
 


