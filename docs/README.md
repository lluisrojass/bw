
The image blog will contain three pages 
  1. a basic photo-stream homepage
  2. a breakdown-by-month page

The photo-stream homepage will be paginated based on a build-time parameter, and the static html file should only SSR the most recent page, and should CSR remaining pages.

Pagination will be driven by a page-embedded descriptor, which maps page numbers to page resources. Page resources contain an ordered list of photo IDs. For this reason, we can't cache HTML pages, since we can't ensure accurate versioning. 

Page resources can be hashed, using a git versioning system. 

For the per-month photostream page, the embedded pagination knowledge must be on a per month basis to drive the UI. The UI will let you select a month to start from and will CSR pages going backwards in time (much like Tumblr archives). This page should generate accurate contents for that filter based on the pagination knowledge.    

Image files will be held in a single folder, each named [id].[ext], where [id] will be unique for every file and [ext] constant. 

The build process should process images in order to resize for three viewports (small, medium and large). The output will be segmented into seperate folders by viewport (/images/[size]/[id].[ext]). These images should be cached aggresively. 

a YAML file should describe all images, associating them with an ID, timestamp, optional description, and optional location (latitude and longitide). This file will be used to generate runtime pagination artifacts. IDs not be monotonically increasing numbers, in the instance that an old image be replaced.

Images pages will be basic, but will open in a new page to compensate for the lack of photostream deep-linking.

There will also be an about page, with a simple description and a contact link.

There will be a header, with a link back to the homepage via an icon and links for the monthly stream page and the about page. 

There should be a basic footer, with contact link, homepage link and made with love message.

Viewports will be 375px (small), 800px (medium), >1024px (large). 

Images will be 1500px by 1500px (large and photo description pages), 1000 x 1000 (medium) and 900 x 900 (small).


