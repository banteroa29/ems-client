<template >
    <tr >
        <th scope="row">x</th>
        <td>
            <InputText v-model="course" class="width-100"/>
        </td>
        <td>
            <InputText  class="width-100"/>
        </td>
        <td>
            <InputMask  placeholder="mm/dd/yyyy" mask="99/99/9999" slotChar="mm/dd/yyyy" class="width-100"/>
        </td>
        <td>
            <InputMask placeholder="mm/dd/yyyy" mask="99/99/9999" slotChar="mm/dd/yyyy" class="width-100"/>
        </td>
    </tr>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from "@vuelidate/validators";

export default {
    setup: () => ({ v$: useVuelidate() }),
    data() {
        return {
            course : ''
        }
    },
    validations() {
        return  {
            course : {required}
        }
    }
}
</script>