<template>
  <div class="wrapper">
    <PageLayout>
      <template v-slot:header>
        <h1>Test Layout page</h1>
      </template>
      <template v-slot:content>
        <Container>
          content
        </Container>
      </template>
      <template v-slot:footer>
        footer content
      </template>
    </PageLayout>
  </div>
</template>
