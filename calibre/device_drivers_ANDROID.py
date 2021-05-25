# settings for device drivers

### Begin group: DEFAULT
 
# format map
# Ordered list of formats the device will accept
format_map = cPickle.loads('\x80\x02]q\x01(X\x04\x00\x00\x00epubq\x02X\x03\x00\x00\x00pdfq\x03X\x03\x00\x00\x00cbrq\x04X\x03\x00\x00\x00chmq\x05e.')
 
# use subdirs
# Place files in sub-directories if the device supports them
use_subdirs = True
 
# read metadata
# Read metadata from files on device
read_metadata = True
 
# use author sort
# Use author sort instead of author
use_author_sort = False
 
# save template
# Template to control how books are saved
save_template = u'{author_sort}/{title} - {authors}'
 
# extra customization
# Extra customization
extra_customization = cPickle.loads('\x80\x02]q\x01(X?\x00\x00\x00eBooks/import, wordplayer/calibretransfer, Books, sdcard/ebooksq\x02X\x00\x00\x00\x00e.')
 


