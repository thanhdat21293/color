PGDMP     6    :                u            color    9.6.2    9.6.2     Y           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            Z           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            [           1262    35401    color    DATABASE     u   CREATE DATABASE color WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.utf8' LC_CTYPE = 'en_US.utf8';
    DROP DATABASE color;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            \           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12390    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            ]           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    35402 
   collection    TABLE     �   CREATE TABLE collection (
    id text NOT NULL,
    name text,
    color1 text,
    color2 text,
    color3 text,
    color4 text,
    color5 text,
    id_user text,
    date timestamp(6) without time zone,
    description text,
    share text
);
    DROP TABLE public.collection;
       public         postgres    false    3            �            1259    35418    like_dislike    TABLE     h   CREATE TABLE like_dislike (
    id_collection text,
    id_user text,
    status text,
    date text
);
     DROP TABLE public.like_dislike;
       public         postgres    false    3            �            1259    35408    users    TABLE     �   CREATE TABLE users (
    id text NOT NULL,
    name text,
    email text,
    password text,
    description text,
    website text
);
    DROP TABLE public.users;
       public         postgres    false    3            T          0    35402 
   collection 
   TABLE DATA               r   COPY collection (id, name, color1, color2, color3, color4, color5, id_user, date, description, share) FROM stdin;
    public       postgres    false    185           V          0    35418    like_dislike 
   TABLE DATA               E   COPY like_dislike (id_collection, id_user, status, date) FROM stdin;
    public       postgres    false    187   B>       U          0    35408    users 
   TABLE DATA               I   COPY users (id, name, email, password, description, website) FROM stdin;
    public       postgres    false    186   �>       �           2606    35415    collection collection_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY collection
    ADD CONSTRAINT collection_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.collection DROP CONSTRAINT collection_pkey;
       public         postgres    false    185    185            �           2606    35417    users users_pkey 
   CONSTRAINT     G   ALTER TABLE ONLY users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public         postgres    false    186    186            T      x��}ˎI����+�7�3�&���f�6�а�;��#�LVe�����d<��f A[��F�B���f~`�J?�s,�d���f�$3뚻��{Ϲ/w����0�=O��r�=Y�'g�ͅ�&�m-l\hD����������6y.
Q�E�(�uV��+��UR��|��°�����j����w��?����,wW����/��������߈���V��&+:��7��F4�v�%-{St��z�h�Q~�*ދ�����6{�^}Zͦ�s���׍F9��KS�BUe%k�d]�6i�����/Gˣ�ى_�:�]f�b�ͦ��.�\T�_	_w��D�i���UT���=����)���|�^L�ɰ藓��.�帟B���:�pm\���66�����LZ��p��#�ܝc���C�̺�'�{ns�m++��^Jى��*D�QE��7%�p\���W�S�b�iXo�-G=.H��j�Z���CݼnU0��ZTҢ���I�~}����ߋ��Ͷ�"�m7��+$�����Z*�����̓OZ����+>^��p��_���Y<�ɭB��Pwy)��[�g�1�w���p����F��T������mB�P��$�*��^�R���вJ;V��OG���b2'��j5ɺ�tXN68��u�0U�k%�
-�hm�UR�JW�٭����j?�G����U��&�<�����mph��5-T�U��c�����\Ͱ>-�߭���t�ϞO��a"Z,��5��=Q�*EٖZ�΋Z���=�Ъ�}��O�Z\����|�s��|������Ӛ��4��!���r�.&W�Gb<��a2�w�AT�l++j�K�
�V��Z�2����$Y˛�i��*wW�S1Y�"[���a+d%�<W���h<�˱*\c�lҪ�dswG�����0�{X�tO��|�/�<���i�}��uMU{��ʪN�Vj��Yw��L�����6�\��U֭�縰�����ȡ*%�r��J�E�|��+�g���=`���vX�)�)������nJ�f�[��h;��Ν1iN��x.��j?.?̋Gb��e�z�N�~�����B�B� ��0Yyc���Z�h_�*�5�_ vl�8/>�O�I��O���n:�N�<�;�l(E��V���68x��%��ߑ��>zu5RG��g�as��w�l����E����3]��m[J��ε���p��z(L��C�~�.�����\M��R4��E#6Y[�4V�]礂��$i�;��g/�;�xq�_��ɰ4�|��?�qc�s�/�p�
�	�;��S:����h�6G����O����@����[):���K[_ָ�*�i��\,WL�#x�a�HoW����f����M{��O�ue]I�Ｌ�=�+�L[��5hQ��1 	�};�/���X����g�*8�0Qj�4�rC2!��9|����T�� Z6_m�B��P5�D������P6���6M�n���rU��^aß��t��R�șx�q����Ǘ�%|�a�)��{�%?�Ê��/w}�j��=����8KUQv0�sZԍ��C�u
~�F��{���|bEj�o��ٛ�fX�ԭ��[(2 �r�iA+u*S������2���|n��a���f!z��2���(���Ua�$��)��J���v��I�ߓ�����2n~��E<���qXǹ.}}�=@��FԸs�|���%����d�1@�� �}������ .ʼ��>ӆ5�L�eW�4htS4����^h��a��v�O�b�±B�p�JI�Pv��x�iΌ��I��@���=,8�x��Ҵ^ba��F�Px���X?hXhK�谾ɥ����f����~�$n�^���7swsW�
t&@�I6�,�.s�T��'�����L��]n����0ɞ-��~�΄G름v��lJ�'�E��K<^��Mo�ϔ��<��x��Nw�����n!tv�Y�U�2�C�w��JY&�.��'Ryq�7���?�	�_M�E�n��m��×����I[2��
�A�?�������}ϡ��JV)�J��FY�h�.c�L�"$��񚜐�^Aٺ�r��^Lg���-m���۲b�KK臭���K���� :�>�h<�3�S|��}1's�{x��wyC���
[��N:�Ui�v\��|4��㺞m������wٻa�{�WT��]@8;g�ʂ�< ^��� P���L9��`� �����Gc�r �/<��l�ZcWZh .	�
^T25���؉�㣙a���[�N-{�3l�z����Y�
���
��5��`�ɼ��H~d������Z�W�d�yI���1�n_S�ڑ&��H�3`ش���{��`b1l�+Q�M�s�
~}���G���(��]�`sc��%��.{=�Ĳnp������p-:'����Kc7dS�ϟ�0�Q�y�[N?����t��d����L�j�������� ���Vӷz��[��U�����*�<���^H�p��&���h�.��l,I�w�_-�D��{��埲�3����t,,��b�l����mο�s�9�{��/_�?^���6�b������Mt�+<X���4u�**�ِ�4�x[8��O_�c^@��v:�g�Xq�*٢(�Pu�Xw#M��|h�	�K+�_�Oz�r4.�����~<]�6p���o5�@�,�!�y�G���ip��`�g/A	v���~��[�ʋҔe�')�
�7����.M��������>P�����|{���hqZ����B�{R^5Z�x�]WtU���_��h��QQ@�~��N���|�e��A����v]��Y^J/*�L����4?U��������S6�6�bnf�As� J��[�-t;�;�_�a�eu���x-[���hP)'�M-a�
���V66L��|~ǫ��j��	ˎw��Z�_F���:	�h�J_[8%�L��=���?4�0�^� N��fn	p�	�}�V��38͍����U�ߐ�g|��<�����o�2N��,�\���+KZ�B�.1�O����ף���
�����r:d��e��?�/Af�f��PE�M�(Z�Yv*M��Hg̠�0�H�cs�y��=��^��^��l<0�-#m����E��0o�����8�Uy���.�u�`k���XHti(M]hC��E��#���hf�o�:�
LG�>p0���@��V�OCQ&��0凫�Tt�t�߂�e~���փh�6!B�Rʌ������5�/����������j2�f{��M����(`��r��������5ܯqE���Z���d:��93xۡ��5���{Q��Sht���r�&b�{���W��X�G�z����S�?�� ]0��Z�h;�.u�v�N�~R�<����I��_��-@�aQ�*k��<!�f7��e	V��2M�\��ї3U�c6^-����9��O��g��>w�y�����m���%���_�#b'����6s���"�@4P\�t!��h:V_�3�61�~O>Ð�ހ�L(������z�HH	���A7D]����Q�:�4�uS4����~DL���w� 7=e�H�dC�y���T�$Cݚ�p�]�_ϊ��G�<�׻�e4gg�o*���?6,+i�ֵZK��鷅_>�2/�)9!�yW2�^����V:�J���Ѧqē�۟�9+���1=Z�{���=l7)���F	c�u�8<`�j�Ӕ�l����eD�_�W���gV���� ��.��X�%La
��8o���.*,����X��@�{x���BtM0`�퀡� �zʲ�����d� k��=�6WVH%+Ʋ+g�emX(T���Ӫ��ɥ�>��>�	�g��1�u1����! �4p�VTx���࠽�O�ٻ�#�oFf9���|��'/W����pȐ©��9�iZ��B�T�x�:�F�\��i���M�f\���U�ֻIϚ�g��,+����Ej��-ٴUh�Gb���~2�a    !�e�綫;@���1��|)*S3��nK' h'p��&���{�;޳�L��U1��K�ɋ����L:˷��R�#U�Ρp��:�eo�cѡn��ux�X�k a����"A�9�{�ǞmG��n�s�����.�������D�:T����g��F�\��hZ����O��d8m,l��}Y�4�e�'n���ȕJ������A>`�+���ٻXI5��'<8֕J+�>����B��s��&�*�#=S.N����s���l�?���3ok�Tc|�,K<�x�-���Sp��U�i:��fp���:!�����T�g�JZ����%�xq̹#�;���sC�tX���~����w&�Vͤ���Wi�ޓO{^itk��t�ϳ�����*�?Sr��	Ǘ0�9̓��3���G�Ao��r�d��~���>(]Q�0�e��V����{:f�S�gZ��ya.�L� �����AizH����/r�S�=LZ
���Ȣ-A�y̷��y�J�7��SP0����PI��3'�WMn
�2� �CK�������d��&��l�ɦK�� "��i^Y�t(Xb[�%0R�C�l�'�FmwF�؄�S<����~f��3 @����l�G�i:��j����]�d:��}�9>�v�S�Y0#��j&*|tM']�[a�4�F���f������v��_��r*,���T��m]����k��J�4KvO>�᫟��'d��bXO�8���t���MW8R�(t)Z��fR�Ҭ��tگ�\�*/�Y,Ầ�*�:}�1�v-�K�1��V����;ޛ�[Μ��l؎/�k��K�]��[8
[`�Ҧ����鳑�Xx|9��l}��nW�HO@^;�+�U�J���%��`9�y,ue��]-�����F�@ᦰ�4 �:WV�5�w\V�2����|*֏��t{�k�2<����n<� �ׁ5Zǒ�
j�E4u�1SE�f;�/@�u�+Ƥ�P��dI��W��&+!����.׭m�����Q�[�I,� 8am�1��a�͘٭]�׶>@�\gq�J����^Ub���x���w��@�=�!3�tU�a�:`�F�U��1�k������\:>3�9sD1;�0���j�m[q{+[���N��sp����4/�M2��Oc��X����aX�S���d#j;��م��58� �
�p�UiD�����<Q΁�٥�˫б��$�.<�*��nH�_���XF0�����g��g�� �(a-[B�Yo5���D��
�i���� �.��v�P�����=���7U� �Р���XF\t��i��U,���rD���ʲ��W1��;َ�����0�7^�P�+<k	�������]=b���|��k���0��6��%���!(�B�sR+QW S��H�<�	���H��qK�Wg�f5��*��}��p���q�/Hɸ_�@��y�CK�z�y�w�i,�Ķ9�iYժ�1�β���H���w����w��-�Z�NV�W�C��Vi�6���\a]�b�m��<P���>���g����a�X�8�7d2���4' 1��M��i5�͇9 �~���h���\�[Qu���V1�R�D��]0Ѵ�����!�̎�_���ӸE(R���E���d��L�[���NU�㝖y~��M�*�%��'��  �6g�+�D���\��4�����U;��e'|Η8�|���[�1��V�D{5����YhsW�t�>�[�i�Z7Ύe��gz���t��e�1l�*q|}��yi��|bk��e��\���ŏ�)'lUX_�N������-S���7ް�,ڧL�	Kʟ��E�^�be�{�_��n�`)s!�f�D�:G�u��hXu��)Ӕ��l����},�8gٿ���S�}b�(pkB�pŝ �o���&�@0�Ԟ�;�y�������l+;�_n��L�-�0!��G�Xˑ�@E"��%����.����E�/W�ٰ�I\�v���&�3m#c�s+������4�x"���ML�n�b�{S��Mv�[n��(Y]X1���J��8�@,��J�P�!�OzdX�L���g�<;��36�(��>Qx*ö'G+S6EZ���h 136X�b���0^�'�z2,�Q�`�r���+B�bc[�b��޻�y�?O��r�� ��|
�2���Ǐa:�`A�F����!��a�JT���]�]�X������{�r��g"�@
�X7[1�V��4,@	W Ӷ��%��Ez
�lBۮb2�_g\D�~���:~t%{h��L���Z�ħ\����.��Iv���F���>{��٫����歮@=D�oy1����O'��<��������_��v�9�3&�{���lؖUw��E�p�Xgr�ځvo�X��c�<��3��'U`��r#�B���@���!/����bå���,AW�ev�~K��?[O'�/P����>���<(ٞ�'QjF�Eub��]��ftż2�����qd.H����mNA�a� ��Uz�K�_�����C��R�0�_���-��+�X��W�9��i],��[łWN�������f׉��X۟ͦ�kP�X��VO'c�TU��3��/�D�zC4MO�� �Ƥ3�`;]���,���αYE�²7[�&����I�~^�����|7d��x5��@40+�x��.�P�K�T����h��Yw�ǒ����"�u_c��鸟g��/�9�H�ni�gq��*��\�i]V����t8��H1�������z=]K���f+Y���Q�CpW*�ZZ��$�m�4+�a�l�e#��s��W����w�$8g�3���N�-�xl^3.�=��E�iX�851��C4�?SFá �;��j�.���MX�Ǝ `G,��iX�]�� �@3���Jj%!�5��4�%���;6N�@�y�^�3�u�_�0�v: Eծ`�%Ԯ�l�ŶW�s�f�x����Y L��z:�kp���z�n�7i�8�2��\--�U���u`�����L�SQï��&����������
�����Z z�<��)Os�w�3r��]Nĳ3�a�/V;�Q.�w���4���(�o�UU�mb����0z��Y7lX�跉ݒ��lb�}�� QW�fK&J�5:�1����5h�Nd̹��o��稨��54�f�C�s`V/�xgЁ�vv�$���/Ah�Z����$+p�[���j#���
#*�s�������ߦN��=��뱎1:$��n�[,�?��~��5\{	�$@6���1'lbv�K�Qxp���2h@h���L�����yn�����eԠ�X����p���x`�!�����n�d�O������|��Lɚ[i3H��4|��� �Φ��0�_�V��
�5 盬2^���rY��83)��3amˆ+��<���%xFߵ@�8m���`������A��]�=�O�)D����-=N&zRp�\�i��D��r�众�< �2����m*|ଲ^�ٵ4���
|G�������b[/;9E�*�h�c#������脳������y�W���਱�o}��-'��E��U]j0�й�!�1���in�fi��)�?���cXf�+xm���)طgZE�']|�6:���o�f`�G��T��W�7�v��[!]�)�	
FJs��To��7-��_�$�/����T�}W@s�(�i�F6\�u��kF��b�0�U3$� �G�����a>����b��B�%oۊ�d���tp3%|^mU�yp"�ϟ����l��<k�q� ?t�Օ���4N��%��W.�>}�K���(la!</�?�g�5kV�֥�U�"/ jrQ��\e!��x�v2�%=�_,��Ħ�R��Ɩ��̀�9�
*�Cž�6q,��<����_��`�/X 逭�4��al�>�
n��I�N`�˻��: ���U��
��ɍ��tI��%���e���&�m[z�x�X�g�x`    ;��E���,��s�Vց�
�̰��)ks��b�j�ĪŻ�t~L.�R�-��ls݊7d�����M�:��YÖ!��P6~kcʴ�`޿�S�V�#��w�Xd����Vk�hKU6p%�/��]ns�j�ı���38��%��–��t3�m`4���`���^U�8��f9���Z.=��f�[�^L7��a��O=Dm�ĹƉ�Ʊ~Q�1�a�;����r���u�K�M���+0N�k��lt`aWѦ��T���v;O��4����6Z06%��fQ|`G�
mb��\FA�vF@N�x�����	��KY�b��(��m,�3�]g]���&�rݒN����jt�T�� ]||]��h�X��j�.�����"#%��@���p����@;YHV#j�u�q*GӺXJ֩l�|2��3�<b��<�P8� L�\��YMhg �n����%p���ׇY:�`2i1ֻ���=�h�� �k
	;�C�|��Ģ��KWOgc��}/��>�:��b^T���*v���C��x���!��ޑ��ťY�wΥ��f������A7L�pH��C�Ҽ�w����&�� �椌�(_�W��ڔpr%g��KK[��� m��oJ�a=;�����1b��g��`��[�T���#�`xXa�5�^�Tt��9H��{�9nq���|��ΐ�t�����U�jY����p/�C��s�?q��"��?��A�����U�r͚p�B�r_�GwNs߀ '��?����]�Q��@�u99��}ހ���p����~M�~рD�5&���4?y7S��J�t�ϙ���u��Tu]]0hg�H�z���f�o��`��q�3|�v����z5�'��J�N8t`���庈ɵmb��-�������)�����Ѷ�]����K���Q�5�e�Q�vZi�'�V?rC45|��}\N��8�c�d���K[V���P����C�i������-�e��dk�b�j>a"�R즋#�9��s�3el�~'��Ӽ���<��x*��pԆ̂�o��[�nJ���c���h��972i6��|>��-�k��oW�)*�8]GBdT�Y�^5ǜ;�����'?�\y�I �./�y?����	Ch���1+l{	l�������	�W���.�Dap`��U��;�8����HH9���_5�;�:>��5b
7������	q�(�b����NHY�E�cna>���Js�f{G��]3緺�sPRǁ�h�X;���<�"�T~�=���:	�$��� 6L`� ��6��r�[]���%�)��C���/�F����r�+56�Hڻ �SآK,���ʇ����q�ю-�o �7��.=�r{�u˪!�ӹ�u�m�)�9�њe�$�1%�m?��~;,#
�y�$xn��l�;U���P)U���(����g���[랽8����h�F��gUIv�����J�,��f$oʎI��s���P���]�`�MG_]�f;��J�`$�^��R{�M��R��dϧp�����ς���`뱀3����T^Σ0x�i�{[:��Ϝ������~�^���O87����*���J[spx�������xt:�!#��>�<��%�">7���W�>��&q�O�9�+�����9�qOfr1�){���s ���UEN� �9-�T|@Î�����b����c�^ZC��[�-�+��hjz�,�Ƴ�:I�/����H��x*ؙba��˳���a�觓M�S
��1V�	UBϡ��G��axp�bc��&9f�6[rth�˦���_�4�p$��fKb��K�H��O7�rM=����1������N[�'.YU"��N8�Υ�nɦ��/�����ŋ�Y��f`�������Gk��q�V�:/e����٥׈�+���|�'�����+&�������lDu�I�c!m�;�����<�ge^�A5�8v�������t��>N��ۊ#$�a~�SJ�Y4���E��@�s�G����~���ii���>>8�W9�$��9N w�;�
�%�ypV<���l#�G֭h �K����ߐ�X���OƠiWx��)�����/�ooH�h��j�����!;:�gّP�"��U�JN�b�3{+]""�'?\sp�8i�ɣ���f���q�U�r��|X�� ؗ�ƅUV��W�<�Of��I��q?M��β�M�G�);Yƙ�+�CLH:�B�?��/'N5�G�4���([��?����D�M�f�* Q�y(%�;�OK��N�����3Y���j���^�_��?� �
2{��_����L_���.�c��xf��AX�<M����w8z��Ii�ı��?�s��,j�W^;�-@u�덴��a��j�a̚��H���� 1�g��EDW%kr��md�]М�ea�ab��K|�B3��ٲ)���M"٫��/�� �4�Q�,P5�h�d^Ʒ���2~/�@=��aU8P���s���;���Y��r0��`˺�~���4<R*��L���� �*_�Xk6c-����ݝ�6�>��gݣ7�oDm��ـ�<�w<P_�`��4���\�g{�>��}�b�M|�ȫ� �*ա9�c4�5\�֤�;¡pW��$b�a�Y��x�f�L���s76�`@O}�"lQ�E���%�����U����b�%��kϖd|	�a%���) 4�����0�=-w�ӱsl%#���K2����7�mCn���9��E��o�Uܨ:�?�w��at럮_t�,� ~�Y"�s�Þ5�d��T)Nbo3L�����/�#8��a�7e�,���a���ہ��6:�[`��iv�|FR�d��i
���h��Y�Z-�$�i]`��o�ę�������h|;���BcL&����U�H ��
,P�1���,��h��b��%��-����p���&r���L��^��p����S��rw����D3�G�M+/���s�;i��;��Z�`�w��.Ay����w��V��+�Kl8�8櫎~j��Y����fϯv����+/�&�����vŜ}�$v�����3��q.m%��M�b�����e�:~�`��P�~��Y�8%�/a��R2c�7b��)�R��o-߇���=I?G3O"��U��l�=���*�-���s��"g�f��}�6���Ӝ�kp�����z٥m,,�
ʚ/*j8_|o�N��E�ŗ*��w��|���Up���'�i08�8T�7X�+Mb��pjٓ�{���'���~��f���9��s�#�-|+��8��E��-@@�w4s'�s��Y�&�k86Bi4�<eLS�I�å�o��կ~�(~�Ml��u����u��nxm��N3eá���.��/t�������0��?���K���m��ZHls���O#��E�,;]��x����@Ё���y��=�����`����X�{�?S�X��_L��*��H���vx�JÖ�*�&��M�"�!9��;��|ĢE������9o���j������8"O�w�1}zw0��ś�x�;����7�&{����.o������|/XĞ����̯���C���/h�X$���`�,�[��1(�J�g���B�������������_����'Q�k3� 5��Zx*�'v8g�'�0�%��xX�W� r�ҧ�#<����.zP]�j�Qh��%8���:�7�9ʇ�3�����R��C��-�w��F$am04��$��ɍ�)�����H�v�(u�
��۪�kX�ԕ���Hm�Xe�:�x�Zg���wc�)�yf�%3�Ʉ��'_�]Lp�-�E�%m�-�T�q�Y�D��@�'�׷�U�T��H\hC�,����O3����=ysȡ?:d<9��_o�� �|�/ Pi�uD�e��5eY����*� ��h���ǲT�^��g�p�K�l%��h�X���Ԡ���Z������1���}��|����7�}}�����< #   /:��ldmlK�����kA��ÿ��?�?�b      V   P   x�s���̈����4����N��r��a�c��`��q�d� �f�{Y�VxE��*j�U� ����%T(F��� �H       U   \   x�3��K/�|��5O!$�����#�ZX�Y������Xbdhdi쐞�������˙����D\F�@5
@�� ՙH�c��b���� �"�     