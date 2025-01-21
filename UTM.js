<script>
var url = new URL(window.location.href);
var query_string = url.search;
var search_params = new URLSearchParams(query_string);
var source = search_params.get('utm_source');
console.log('UTM Source:', source);

var iframe = document.querySelector('iframe');
if (iframe) {
    iframe.src = iframe.src + '?utm_source=' + encodeURIComponent(source || 'DefaultSource');
}
</script>
