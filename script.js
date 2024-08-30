//your code here
<script>
function handleSubmit(event) {
  event.preventDefault(); // This prevents the page from refreshing when the form is submitted
  alert('Form submitted!');
}
</script>

<form id="adoption-form" onsubmit="handleSubmit(event)">
  ...
  <!-- rest of your form goes here -->
  ...
</form>