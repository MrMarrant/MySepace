import { shallowMount } from '@vue/test-utils';
import Add from '@/views/FormAddArticle.vue';


describe('Add component', () => {
    it("vérifier que l'ajout d'un article fonctionne" , async () => {
      const wrapper = shallowMount(Add);
      await wrapper.find('button').find('.shadow').trigger('click');
      expect(wrapper.exists()).toBeTruthy();
      expect(wrapper.emitted().click).toBeTruthy();
    })
});