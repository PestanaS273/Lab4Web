<template>
    <div>
        <header>
            <slot name="header">
                <BaseHeader/>
            </slot>
        </header>

        <main>
            <slot></slot>
        </main>

        <footer>
            <slot name="footer">
                <BaseFooter/>
            </slot>
    
        </footer>
    </div>
</template>

<script>
import BaseHeader from './BaseHeader.vue'
import BaseFooter from './BaseFooter.vue'

export default {
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>
