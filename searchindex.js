Search.setIndex({docnames:["api/analysis","api/gqcnn","api/grasping","api/policy","api/training","api/visualization","benchmarks/benchmarks","data/data","index","install/install","tutorials/planning","tutorials/training","tutorials/tutorial"],envversion:52,filenames:["api/analysis.rst","api/gqcnn.rst","api/grasping.rst","api/policy.rst","api/training.rst","api/visualization.rst","benchmarks/benchmarks.rst","data/data.rst","index.rst","install/install.rst","tutorials/planning.rst","tutorials/training.rst","tutorials/tutorial.rst"],objects:{"gqcnn.AntipodalGraspingPolicy":{action:[3,2,1,""],select:[3,2,1,""]},"gqcnn.ClassificationResult":{__init__:[0,2,1,""],ap_score:[0,0,1,""],auc_score:[0,0,1,""],confusion_matrix:[0,0,1,""],convert_labels:[0,2,1,""],correct_indices:[0,2,1,""],error_rate:[0,0,1,""],fpr:[0,0,1,""],label_vectors:[0,2,1,""],load:[0,3,1,""],mispredicted_indices:[0,2,1,""],multiclass_label_vectors:[0,2,1,""],num_categories:[0,0,1,""],num_datapoints:[0,0,1,""],precision:[0,0,1,""],precision_recall_curve:[0,2,1,""],predictions:[0,0,1,""],recall:[0,0,1,""],roc_curve:[0,2,1,""],save:[0,2,1,""],top_k_error_rate:[0,2,1,""],top_k_predictions:[0,2,1,""]},"gqcnn.ConfusionMatrix":{__init__:[0,2,1,""],update:[0,2,1,""]},"gqcnn.CrossEntropyAntipodalGraspingPolicy":{action:[3,2,1,""],select:[3,2,1,""]},"gqcnn.DeepOptimizer":{__init__:[4,2,1,""],optimize:[4,2,1,""]},"gqcnn.GQCNN":{__init__:[1,2,1,""],add_softmax_to_predict:[1,2,1,""],close_session:[1,2,1,""],filters:[1,0,1,""],get_im_mean:[1,2,1,""],get_im_std:[1,2,1,""],get_pose_mean:[1,2,1,""],get_pose_std:[1,2,1,""],get_tf_graph:[1,2,1,""],get_weights:[1,2,1,""],init_mean_and_std:[1,2,1,""],init_weights_file:[1,2,1,""],init_weights_gaussian:[1,2,1,""],initialize_network:[1,2,1,""],load:[1,3,1,""],open_session:[1,2,1,""],predict:[1,2,1,""],reinitialize_layers:[1,2,1,""],update_batch_size:[1,2,1,""],update_im_mean:[1,2,1,""],update_im_std:[1,2,1,""],update_pose_mean:[1,2,1,""],update_pose_std:[1,2,1,""]},"gqcnn.GQCNNAnalyzer":{__init__:[0,2,1,""],analyze:[0,2,1,""]},"gqcnn.Grasp2D":{axis:[2,0,1,""],endpoints:[2,0,1,""],feature_vec:[2,0,1,""],frame:[2,0,1,""],from_feature_vec:[2,3,1,""],image_dist:[2,3,1,""],pose:[2,2,1,""],width_px:[2,0,1,""]},"gqcnn.GraspingPolicy":{action:[3,2,1,""],config:[3,0,1,""],gqcnn:[3,0,1,""],grasp_sampler:[3,0,1,""],grasps_to_tensors:[3,2,1,""]},"gqcnn.ImageGraspSampler":{sample:[2,2,1,""]},"gqcnn.Policy":{action:[3,2,1,""]},"gqcnn.RegressionResult":{__init__:[0,2,1,""],error_rate:[0,0,1,""],load:[0,3,1,""],num_datapoints:[0,0,1,""],save:[0,2,1,""]},"gqcnn.TrainStatsLogger":{__init__:[4,2,1,""],log:[4,2,1,""],update:[4,2,1,""]},AntipodalGraspingPolicy:{state:[3,0,1,""]},CrossEntropyAntipodalGraspingPolicy:{state:[3,0,1,""]},Grasp2D:{angle:[2,0,1,""],camera_intr:[2,0,1,""],center:[2,0,1,""],depth:[2,0,1,""],width:[2,0,1,""]},GraspingPolicy:{config:[3,0,1,""],grasps:[3,0,1,""],state:[3,0,1,""]},ImageGraspSampler:{config:[2,0,1,""],gripper_width:[2,0,1,""]},RgbdImageState:{camera_intr:[3,0,1,""],full_observed:[3,0,1,""],rgbd_im:[3,0,1,""],segmask:[3,0,1,""]},gqcnn:{AntipodalDepthImageGraspSampler:[2,1,1,""],AntipodalGraspingPolicy:[3,1,1,""],ClassificationResult:[0,1,1,""],ConfusionMatrix:[0,1,1,""],CrossEntropyAntipodalGraspingPolicy:[3,1,1,""],DeepOptimizer:[4,1,1,""],GQCNN:[1,1,1,""],GQCNNAnalyzer:[0,1,1,""],GeneralConstants:[4,1,1,""],Grasp2D:[2,1,1,""],GraspingPolicy:[3,1,1,""],ImageFileTemplates:[4,1,1,""],ImageGraspSampler:[2,1,1,""],ImageGraspSamplerFactory:[2,1,1,""],ImageMode:[4,1,1,""],NoAntipodalPairsFoundException:[3,1,1,""],NoValidGraspsException:[3,1,1,""],ParallelJawGrasp:[3,1,1,""],Policy:[3,1,1,""],PreprocMode:[4,1,1,""],RegressionResult:[0,1,1,""],RgbdImageState:[3,1,1,""],TrainStatsLogger:[4,1,1,""],TrainingMode:[4,1,1,""]}},objnames:{"0":["py","attribute","Python attribute"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"]},objtypes:{"0":"py:attribute","1":"py:class","2":"py:method","3":"py:staticmethod"},terms:{"189k":7,"3dnet":7,"abstract":[2,3,10,12],"boolean":0,"case":12,"class":[0,1,2,3,4,11,12],"default":[11,12],"enum":4,"final":[0,1,3,10,11,12],"float":[0,1,2,3],"function":[5,11,12],"import":9,"int":[0,2,3],"new":[0,7,10,11,12],"public":8,"return":[0,1,2,3],"static":[0,1,2],"true":[0,1,5,11,12],"try":[10,12],"while":4,For:[8,9,10,11,12],One:[11,12],ROS:8,The:[2,6,7,8,9,10,11,12],Then:[9,11,12],There:[11,12],These:6,__init__:[0,1,4],abb:[6,7],abil:[11,12],academ:7,access:[0,11,12],achiev:6,across:[2,7],action:3,add:1,add_softmax:1,add_softmax_to_predict:1,addit:[2,6],adv:[7,11,12],adversari:7,after:[11,12],all:[2,4,8],allow:[2,5,7,11,12],along:[11,12],alpha:2,also:[9,10,11,12],altern:[3,9],amount:2,analysi:8,analysis_config:[11,12],analyz:[0,11,12],analyze_gqcnn_perform:[11,12],angl:2,angle_dist_weight:2,ani:[3,4,9,11,12],antipod:[2,3,7],antipodaldepthimagegraspsampl:8,antipodalgraspingpolici:8,anywher:9,ap_scor:0,api:[8,9],approach:2,appropri:9,approxim:[11,12],architectur:[1,6,11,12],architecur:1,area:0,argument:4,aris:7,around:2,arrai:[11,12],as_default:[11,12],assert:7,attribut:0,auc_scor:0,autoclass:[4,5],autolab_cor:[2,9,11,12],automat:[9,11,12],avail:[7,9],averag:0,axi:2,base:[0,1,2,3,4],bash:9,basi:2,basic:1,batch:[1,11,12],batch_siz:1,becom:7,been:[8,9],befor:[2,11,12],behavior:3,being:[11,12],believ:6,benchmark:[6,8,11,12],berkelei:[6,7],berkeleyautom:[5,8],best:3,better:2,between:2,binari:[2,3],binaryimag:[2,3],bool:[1,2,3],box:[11,12],branch:9,broadli:7,browser:[11,12],bug:8,build:[1,8],calcul:[0,11,12],call:[11,12],camera:[2,3],camera_intr:[2,3],cameraintrins:[2,3],can:[3,6,7,9,10,11,12],candid:[2,3],cannot:3,captur:2,categori:0,catkin:8,catkin_mak:9,ceil:2,cem:3,center:2,cfg:[10,11,12],challeng:[11,12],chang:[9,10,11,12],charact:[11,12],characterist:[0,11,12],check:[2,11,12],checkout:9,choic:[11,12],choos:[11,12],cite:8,classif:[0,4],classificationresult:8,click:12,clone:8,close:1,close_sess:[1,11,12],closur:2,cloud:[8,10,12],cnn:[1,2,3,7,8,9,10,11,12],code:[8,9],coeffici:2,color:[0,10,12],column:[11,12],com:9,command:9,compon:3,comput:2,concern:8,config:[0,1,2,3,4,11,12],configur:[0,1,2,3,4,8],confus:0,confusion_matrix:0,confusionmatrix:8,connect:1,consid:[6,7],constant:4,construct:[11,12],contact:8,contain:[0,2,11,12],conv1_1:1,convert:[0,3],convert_label:0,convolut:3,copyright:7,correct_indic:0,correctli:0,correspond:[0,2,5,10,11,12],could:[10,12],covari:3,cover:12,crane:2,creat:[2,11,12],cross:[3,10,12],crossentropyantipodalgraspingpolici:8,cuda:9,current:[1,9,10,12],curv:[0,11,12],cv2:9,dai:[11,12],data:[1,3,4,7,8,10,11,12],data_split_mod:[11,12],databas:7,datapoint:[0,7,11,12],dataset:[4,5,6,8],dataset_dir:[11,12],datatpoint:[11,12],datset:[11,12],debug:2,deepoptim:[8,11,12],depend:8,deploi:8,deploy:2,depth:[2,3,10,11,12],depth_grad_gaussian_sigma:2,depth_grad_thresh:2,depth_ims_tf_table_00000:[11,12],depth_sample_win_height:2,depth_samples_per_grasp:2,deriv:7,describ:7,detail:[7,10,12],determin:[2,3],determinist:3,devel:9,develop:[9,10,12],deviat:1,dex:[7,8,11,12],dexter:8,dict:[0,1,3,4],dictionari:[0,1,2,3,4,11,12],differ:[0,2,5,11,12],direct:2,directori:[0,1,4,9,10,11,12],disk:4,dissemin:7,distanc:2,distribut:[1,3,7],divers:3,doc:9,docs_requir:9,document:8,dof:[10,12],down:12,download:[8,9,11,12],downsampl:2,downsample_r:2,dure:[1,4,11,12],dynam:[11,12],each:[0,3],easi:2,edg:2,edit:[8,11],edu:[6,8],eight:[7,11,12],elit:3,email:6,encapsul:3,endpoint:2,enforc:3,entropi:[3,10,12],environ:9,epoch:[6,11,12],epsilon:3,error:[0,4,6,11,12],error_r:0,etc:[4,11,12],euclidean:2,everi:[11,12],exampl:[8,9,11],except:3,execut:[3,7],experi:4,experiment_dir:4,extra:9,facilit:[8,11,12],factor:2,factori:2,fair:7,fals:[0,2,5,11,12],favorit:[11,12],fc3:1,fc4:1,fc5:1,featur:[2,8],feature_vec:2,feed:[11,12],few:9,file:[0,4,8,9],filenam:0,filter:[1,11,12],find:[11,12],fine:[1,8],first:[2,10,11,12],fit:3,flag:0,folder:[9,11,12],follow:[9,10,11,12],font:0,font_siz:0,forc:2,format:4,found:[1,6,7,9,11,12],fpr:0,frame:2,friction:2,friction_coef:2,from:[0,1,2,3,4,5,6,7,8,9,10],from_feature_vec:2,full:[7,11,12],full_observ:3,fulli:[1,3],fully_observ:3,further:6,gaussian:1,geforc:[11,12],gener:[0,2,4,7,9,11,12],generalconst:8,geometri:[11,12],get:[0,1,9,11,12],get_im_mean:1,get_im_std:1,get_pose_mean:1,get_pose_std:1,get_tf_graph:[1,11,12],get_weight:1,gh_deploi:9,git:9,github:[8,9],given:[2,3,10,12],gmm:3,gmm_component_frac:3,gmm_refit_p:3,gmm_reg_covar:3,gpu:[9,11,12],gqcnn:[0,2,3,4,5,9,10],gqcnn_config:[11,12],gqcnn_model:[3,10,12],gqcnn_prediction_visu:[11,12],gqcnnanalyz:[8,11,12],gqcnnpredictionvisu:[8,11,12],gqcnnweight:1,gradient:2,graph:1,grasp2d:[3,8],grasp:[0,1,3,4,5,6,7,8,9,11],grasp_approach_dir:2,grasp_qual:[10,11,12],grasp_sampl:3,graspingpolici:8,grasps_to_tensor:3,grassp:3,greedi:3,gripper:[2,3],gripper_nam:3,gripper_width:[2,3],gtx:[11,12],guid:8,hand_poses_00000:[11,12],handl:3,has:[8,9,11,12],have:[6,9,11,12],height:2,help:[11,12],here:6,highest:[3,10,12],hold:4,holder:7,home:[10,11,12],hour:[11,12],html:9,http:9,icra:[10,12],im_height:1,im_mean:1,im_std:1,im_width:1,imag:[1,2,3,4,9,10],image_arr:[1,3],image_dir:[10,12],image_dist:2,image_grasp_sampl:[2,3],image_wis:[11,12],imagefiletempl:8,imagegraspsampl:8,imagegraspsamplerfactori:8,imagemod:8,implement:[10,12],improv:6,includ:[5,7,10,11,12],index:8,indic:0,individu:[11,12],inf:2,init_mean_and_std:1,init_weights_fil:1,init_weights_gaussian:1,initi:[1,3,11,12],initialize_network:1,input:[1,3,4,10,12],inputdatamod:8,instal:8,instanc:3,instanti:[1,11,12],instead:[11,12],instruct:9,intend:9,intent:9,interest:[2,9],intermedi:2,interpret:7,intrins:[2,3],involv:[10,12],issu:8,iter:3,jaw:[2,3,8],jeff:[6,8],jmahler:[6,8],june:[10,12],just:[11,12],kit:7,knowledg:7,known:9,label:0,label_vector:0,labels_list:0,larg:[6,7],launch:[11,12],layer:[1,11,12],learn:[0,7,9,11,12],let:[11,12],licens:8,like:[2,11,12],line:0,line_width:0,link:[8,12],list:[0,2,3,11,12],load:[0,1,11,12],local:[11,12],localhost:[11,12],locat:[2,7,11,12],log:[4,11,12],look:[11,12],loss:[4,11,12],lower:6,lowest:6,machin:0,mahler:[6,8],mai:[7,11,12],main:12,make:[7,9],mani:[11,12],manner:9,manual:9,map:[0,10,12],marker:0,mask:3,master:9,matplotlib:9,matrix:[0,3],max_depth_offset:2,max_dist_from_cent:2,max_rejection_sampl:2,maxim:[10,12],maximum:2,mean:1,memor:[11,12],messag:[11,12],meter:[2,3],method:[3,10,12],metric:[0,4,5,11,12],million:7,min:2,min_depth_offset:2,min_grasp_dist:2,minibatch:[11,12],minimum:2,minut:[11,12],mis:0,mispredict:0,mispredicted_indic:0,mission:7,modal:4,mode:4,model:[0,1,3,4,6,8,10,11,12],model_dir:[1,11,12],model_ewlohgukn:[10,11,12],model_filenam:1,modif:6,modul:[5,8],monitor:[11,12],more:[5,7],much:5,multiclass:0,multiclass_label_vector:0,multipl:[10,11,12],multiple_object:[10,12],name:[2,3,4],navig:[11,12],ndarrai:[0,2,3],necessari:9,need:5,neg:[5,11,12],net:[7,8,11,12],network:[1,3,4,6,7,8],neural:[1,3,4,8],neural_network:3,next:[11,12],noantipodalpairsfoundexcept:8,node:1,none:[0,2,3,4,7],normal:[1,2],note:[2,3,4,9],novalidgraspsexcept:8,novel:[11,12],npz:[0,11,12],num_categori:0,num_datapoint:0,num_gmm_sampl:3,num_grasp_sampl:3,num_it:3,num_sampl:2,num_seed_sampl:3,number:[0,2,3,6,11,12],numpi:[2,3,9],obj:[0,1,2],object:[0,1,2,3,4,7,10,11,12],object_wis:[11,12],observ:3,occasion:[11,12],offlin:12,offset:2,onc:[9,11,12],one:[11,12],onli:[9,11,12],open:[1,2,7],open_sess:1,opencv:9,oper:[0,11,12],opposit:2,optic:2,optim:[3,4,6,11,12],option:[0,3,11,12],orient:[11,12],origin:[7,10,12],other:[2,3,5,7,8,11,12],our:[6,7,9,10,12],out:[2,10,11,12],outcom:7,output:[1,10,11,12],output_dir:[11,12],overfit:[11,12],overlai:[10,12],overrid:3,overview:8,overwrit:[11,12],pacakg:9,packag:11,page:[8,9],pair:[2,3],paper:[6,7,8,11,12],parallel:[2,3,8],paralleljawgrasp:8,param:1,paramet:[0,1,2,3,4,10,11,12],part:[10,12],path:[1,3,9,10,11,12],path_to_your_catkin_workspac:9,pdf:[11,12],per:2,percentag:3,percept:[2,3,5,9],perform:[4,6,11,12],phy:7,physic:[6,8,9],pillow:9,pip:9,pixel:2,place:7,plan:[3,8,9],pleas:[6,8,11,12],plot:0,plot_training_loss:[11,12],plugin:9,point:[2,3,8,10,11,12],polici:[8,10,12],pose:[1,2,3,4,10,11,12],pose_arr:[1,3],pose_mean:1,pose_std:1,posit:[0,5,11,12],possibl:7,pre:[2,4],precis:[0,5,11,12],precision_recal:[11,12],precision_recall_curv:0,pred_p_success:[11,12],pred_probs_list:0,predict:[0,1,3,4,5,8,10],predictions_list:0,preprocmod:8,present:7,pretrain:7,prevent:[11,12],previou:[10,11,12],print:[11,12],probabilit:0,probabl:[0,3,10,11,12],process:4,progress:8,project:9,provid:[2,11,12],push:9,put:0,pypi:8,python:[1,8],q_valu:3,qualiti:[0,1,3,4,8],question:8,queue:[11,12],quick:8,rad:2,rais:8,random:[2,3,4,6,7,11,12],randomli:[11,12],rank:3,rate:[0,4,6,11,12],read:[4,11,12],recal:[0,5,11,12],receiv:0,reciev:[11,12],reduc:6,refer:2,refit:3,regress:[0,4],regressionresult:8,regular:3,reinit_fc3:1,reinit_fc4:1,reinit_fc5:1,reinitialize_lay:1,reject:2,rel:2,releas:[7,10,12],repeat:3,repo:[10,11,12],repositori:[8,10,11,12],repres:0,represent:[3,7],request:8,requir:[2,3,9],resampl:3,research:7,respect:0,rest:[11,12],restrict:7,result:0,rgb:[2,3],rgbd:[3,10,12],rgbd_im:[2,3],rgbdimag:[2,3],rgbdimagest:8,rigidtransform:2,robot:[6,8,9],robust:[3,11,12],roc:[0,11,12],roc_curv:0,root:[10,11,12],roughli:[11,12],rss:[6,11,12],rule:6,run:[8,11],same:[11,12],sampl:[2,3,11,12],sampler:[2,3],save:[0,4,11,12],scikit:9,scipi:9,score:0,scratch:[1,8,9],script:[8,11],scroll:12,search:[8,10,12],second:2,see:[2,3,9,10,11,12],seed:[2,3,4],segmask:[2,3],segment:[2,3],select:3,sensor:[10,12],sequenc:[10,12],server:[11,12],servic:[10,12],session:1,set:[0,1,2,3,6,9],setup:[8,9],sever:[11,12],should:[9,10,11,12],show:[2,11,12],sigma:2,similar:[10,11,12],simpli:9,simplic:[11,12],sinc:[7,11,12],singl:[11,12],site:9,size:[0,1,3],skimag:9,sklearn:9,smooth:2,softmax:1,some:[11,12],someth:[11,12],sort:3,sourc:9,space:[2,3],specif:[4,5,9],specifi:[0,1,2,3,11,12],sphinx:9,spirit:7,split:6,src:9,stabl:[11,12],stable_pose_wis:[11,12],standard:1,start:[8,11,12],stat:4,state:3,statist:4,std:1,step:[3,11,12],storag:7,store:[0,1,11,12],str:[0,1,3,4],string:[3,11,12],style:0,subdirectori:[11,12],subject:[6,7],submiss:6,substitut:9,success:[3,10,11,12],suggest:9,summari:[11,12],superior:6,support:[9,11,12],synth:[7,11,12],synthet:7,tabl:[2,11,12],take:[2,11,12],target:9,templat:[4,10,11,12],tensor:[1,3],tensorboard_summari:[11,12],tensorflow:[1,9],termin:[10,11,12],test:[6,8,9,11,12],than:7,thei:7,them:[3,9,11,12],thi:[0,1,7,9,10,11,12],three:[11,12],threshold:[0,2],through:[9,10,11,12],time:[11,12],timeout:4,toggl:[11,12],took:[11,12],tool:[0,4,5,7,11,12],top:[0,3],top_k_error_r:0,top_k_predict:0,tpr:0,train:[0,3,6,7,8,9,10],train_config:[11,12],trainingmod:8,trainstatslogg:8,transform:2,tune:[1,8],tutori:[8,9,10,11,12],two:[11,12],txt:9,type:[0,1,2,3],ubuntu:8,under:[0,8,10,11,12],understand:7,univers:7,unrestrict:7,unzip:[11,12],updat:[0,1,4,10,12],update_batch_s:1,update_im_mean:1,update_im_std:1,update_pose_mean:1,update_pose_std:1,upload:7,use:[0,1,2,4,7,8,9,11,12],used:[1,2,3,10,12],useful:[11,12],user:[9,10,11,12],uses:[11,12],using:[0,1,3,6,8,9,10,11,12],valid:[0,3,6,11,12],valu:[0,3,4],variou:[0,4,6,11,12],vector:[0,2],view:[11,12],visual:[2,8],visualization_config:[11,12],visualize_predict:[11,12],wai:[11,12],walk:[10,11,12],web:[9,11,12],websit:9,weight:[1,2,7,11,12],were:6,what:7,when:[1,3,4,9,11,12],where:[1,2,11,12],whether:[0,1,2,3],which:[0,9,10,11,12],who:9,width:[0,2,3],width_px:2,window:[2,11,12],wish:9,without:7,work:[7,9],workshop:[10,12],wrap:2,wrapper:[0,1,2,3],x32x32x1:[11,12],yaml:[10,11,12],yamlconfig:[2,11,12],you:[6,8,9,10,11,12],your:[9,10,11,12],yumi:[6,7],zoo:6},titles:["Analysis","GQCNN","Grasping","Policy","Training","Visualization","Dex-Net 2.0","Download Link","Berkeley AUTOLAB\u2019s GQCNN Package","Dependencies","Grasp Planning","Training","Overview"],titleterms:{"import":[11,12],ROS:[9,10,12],analysi:[0,11,12],antipodaldepthimagegraspsampl:2,antipodalgraspingpolici:3,autolab:8,berkelei:8,berkeleyautom:9,build:9,catkin:9,classificationresult:0,clone:9,configur:[10,11,12],confusionmatrix:0,crossentropyantipodalgraspingpolici:3,dataset:[7,11,12],deepoptim:4,depend:9,deploi:9,dex:6,document:9,download:7,edit:[10,12],exampl:[10,12],file:[10,11,12],fine:[11,12],from:[11,12],generalconst:4,gqcnn:[1,8,11,12],gqcnnanalyz:0,gqcnnpredictionvisu:5,grasp2d:2,grasp:[2,10,12],graspingpolici:3,guid:9,imag:[11,12],imagefiletempl:4,imagegraspsampl:2,imagegraspsamplerfactori:2,imagemod:4,indic:8,inputdatamod:4,instal:9,licens:7,link:7,model:7,net:6,network:[11,12],noantipodalpairsfoundexcept:3,novalidgraspsexcept:3,overview:12,packag:[8,9,10,12],paralleljawgrasp:3,plan:[10,12],plot:[11,12],polici:3,predict:[11,12],preprocmod:4,progress:[11,12],pypi:9,python:[9,10,11,12],quick:9,regressionresult:0,repositori:9,result:[11,12],rgbdimagest:3,run:[9,10,12],scratch:[11,12],script:[9,10,12],setup:[11,12],split:[11,12],start:9,tabl:8,tensorboard:[11,12],train:[4,11,12],trainingmod:4,trainstatslogg:4,tune:[11,12],visual:[5,11,12],wise:[11,12]}})