<script>
    import PageTemplate from '~/components/PageTemplate.svelte';
    import logo from '~/images/svelte-logo-horizontal.svg';
    import TodoInput from '~/components/TodoInput.svelte';
    import TodoList from '~/components/TodoList.svelte';

    let title = 'TODO LIST';
</script>

<style lang="scss" src="./styles/global.scss">

</style>

<PageTemplate {logo} {title}>
    <TodoInput />
    <TodoList />
</PageTemplate>
