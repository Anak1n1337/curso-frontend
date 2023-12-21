// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){
   
   $('.owl-carousel').owlCarousel();
   
   let titulos = $('h4') // tag
   
   let itens = $('.featured-item') // class
   
   let destaques = $('#featured') // id
   
   console.log(titulos.first());
   
   // Configuração de produtos
   
   $('.featured-item a').addClass('btn btn-dark stretch-link');
   
   $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').addClass('active')
   // $('.featured-item:first h4').removeClass('active')
   // $('.featured-item:first h4').toggleClass('active')
   // $('.featured-item:first h4').hide()
   // $('.featured-item:first h4').show()
   // $('.featured-item:first h4').fadeIn(2000)
   // $('.featured-item:first h4').fadeOut()
   //  $('.featured-item:first h4').css('color', '#f00')
   
   $('.featured-item h4').dblclick( function(){
      
      $(this).css({
         'color': '#f00',
         'background': '#ff0',
         'font-weight': '100',
      });
      
   });
   
   /*
   * Manipulação de eventos
   */
   $('.featured-item a').on('blur', function(event){
      
      event.preventDefault();
      
      alert('Produto esgotado');
      
   })
   
   /*
   * Callback
   * entendendo ações que começam ao tesrmino de outra
   */ 
   $('.featured-item:nth(1)')
   .hide(2000, function(){
      // este é o callback
      console.log($(this).find('h4').text() + 'esgotado')
   })
   .show(2000, function(){
      console.log($(this).find('h4').text() + 'em estoque')
   })
   
   
   /*
   * Animações 
   */
   const duracao = 1000
   
   $('.featured-item:nth(0)')
   .hide(duracao)
   .show(duracao)
   .fadeOut(duracao)
   .fadeIn(duracao)
   .toggle(duracao)
   .toggle(duracao)
   
   
   $('#form-submit').on('click', function(e){
      
      e.preventDefault()
      
      if( $('#email').val() != '' ){
         $('#email').animate({
            opacity: "toggle",
            top:"-50"
            
         }, duracao, function(){
            console.log($(this).val())
         })
      }
      
   });
   
   /*
   * Ouvinte de eventos .nav-modal-open 
   */
   $('.nav-modal-open').on('click', function(e){
      e.preventDefault();
      
      let elem = $(this).attr('rel')
      
      $('.modal-body').html($('#' + elem).html())
      
      $('.modal-header h5.modal-tittle').html($(this).text())
      
      let myModal = new bootstrap.Modal($('#modalId'))
      
      myModal.show()
      
   })
   
   /**
   * TODO: incrementar a validação 
   * - Checar se o nome é vaĺido (mais de 2 caracteres)
   * - Checar se o e-mail é vaĺido com ao menos um "@" e "."
   * - Checar se o CPF  é válido com regex
   */
   
   function validate(elem){
      if(elem.val() == ''){
         
         console.log('o campo de '+ elem.attr('name') + ' é obrigatório')
         elem.parent().find('.text-muted').show()
         elem.addClass('invalid')
         
         return false
         
      } else {
         elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
      }
   }
   
   /* validação do submit do form */
   $('body').on('submit', 'modal-body .form', function(e){
      
      e.preventDefault()
      
      const inputName = $('#nome')
      const inputEmail = $('#email')
      
      validate(inputName)
      validate(inputEmail)
      
      if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
         console.log('Verificar os campos obrigatórios')
         return false
      } else {
         $(this).submit()
      }
      
   })
   
   /* Disparo para validação do campo por meio do blur */
   $('body').on('blur', '#nome', function(){
      validate($(this))
   })
   
   $('body').on('blur', '#email', function(){
      validate($(this))
   })
   
   /* Disparos com ultilização de plugin jQuery Master */
   $('body').on('blur', '#cpf', function(){
      validate($(this))
      $(this).mask('000.000.000-00');
   })
   
});